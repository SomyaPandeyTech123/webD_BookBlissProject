from fastapi import FastAPI,Depends
from sqlalchemy import create_engine, Column, Integer, String, Sequence
from sqlalchemy.ext.declarative import declarative_base
# from database import Base, SessionLocal,engine
from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List
from fastapi import FastAPI
import mysql.connector
import json
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.params import Form
import logging

app=FastAPI()
logging.basicConfig(filename='api.log', encoding='utf-8', level=logging.DEBUG)
logger = logging.getLogger(__name__)

origins = ["http://localhost:3000"]  # Add your React app's origin here

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="Somya@2075#",
  database="book_db"
)

class Book(BaseModel):
    book_id: str = None
    book_title: str = None
    price: float = None
    author: str = None
    category: str = None
    image: str = None

class User(BaseModel):
    username: str = None
    password: str = None
    email: str = None
    phone: str = None
    house_num: str = None
    street_num: str = None
    district: str = None
    pincode: int = None
    state: str = None


class Cart(BaseModel):
    cart_id: str = None
    username: str = None
    book_title: str = None
    book_id: str = None
    quantity: int = None

class Contact(BaseModel):
    username: str = None
    email: str = None
    message: str = None


# Get all books
@app.get("/books")
def get_book():
    try:
        logger.info("Logging from the get book function")
        cursor = mydb.cursor(dictionary=True)
        cursor.execute("SELECT * FROM book")
        result = cursor.fetchall()
        return {"books": result}
    except mysql.connector.Error as e:
        # Handle the error appropriately
        return {"error": f"An error occurred: {str(e)}"}

# Get a book by ID
@app.get("/books/{id}")
def get_book(id: str):
    logger.info("logging from the get book by id function")
    cursor = mydb.cursor(dictionary=True)
    cursor.execute(f"SELECT * FROM book WHERE book_id = {id}")
    result = cursor.fetchone()
    return {"books": result}

# Get a book by category
@app.get("/books/category/{category}")
def get_books_by_category(category: str):
    cursor = mydb.cursor(dictionary=True)
    cursor.execute(f"SELECT * FROM book WHERE category = '{category}'")
    results = cursor.fetchall()
    if not results:
        raise HTTPException(status_code=404, detail="No books found in this category")
    
    return {"books": results}

@app.get("/books/author/{author}")
def get_books_by_author(author: str):
    cursor = mydb.cursor(dictionary=True)
    cursor.execute(f"SELECT * FROM book WHERE author = '{author}'")
    results = cursor.fetchall()

    if not results:
        raise HTTPException(status_code=404, detail="No books found by this author")
    
    return {"books": results}

@app.get("/books/title/{book_title}")
def get_books_by_title(book_title: str):
    cursor = mydb.cursor(dictionary=True)
    cursor.execute(f"SELECT * FROM book WHERE book_title = '{book_title}'")
    results = cursor.fetchall()

    if not results:
        raise HTTPException(status_code=404, detail="No books found by this name")
    
    return {"books": results}


@app.post("/addbooks/")
async def add_book(book: Book):
    logger.info("logging from the add books function")
    cursor = mydb.cursor(dictionary=True)
    sql = "INSERT INTO book (book_id, book_title, price, author, category) VALUES (%s, %s, %s, %s, %s)"
    val = (book.book_id, book.book_title, book.price, book.author, book.category)
    cursor.execute(sql, val)
    mydb.commit()
    return {"message": "Book added successfully"}

# Delete a book by ID
@app.delete("/books/{id}")
def delete_book(id: str):
    cursor = mydb.cursor()
    cursor.execute(f"DELETE FROM book WHERE book_id = {id}")
    mydb.commit()
    return {"message": "book deleted successfully"}

@app.put("/books/{book_id}", response_model=Book)
def update_item(book_id: str, book: Book):
    cursor = mydb.cursor()
    query = "UPDATE book SET book_title=%s, price=%s, author = %s, category=%s WHERE book_id=%s"
    cursor.execute(query, (book.book_title, book.price, book.author,book.category, book_id))
    mydb.commit()
    cursor.close()
    book.book_id = book_id
    return book


@app.post("/user/")
async def signup_user(user: User):
    try:
        logger.info("Logging from the signup function")
        logger.info(user.username)
        logger.info(user.password)
        logger.info(user.email)
        logger.info(user.phone)
        logger.info(user.house_num)
        logger.info(user.street_num)
        logger.info(user.district)
        logger.info(user.pincode)
        logger.info(user.state)

        cursor = mydb.cursor(dictionary=True)
        sql = "INSERT INTO user (username, password, email, phone, house_num, street_num, district, pincode, state) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
        val = (user.username, user.password, user.email, user.phone, user.house_num, user.street_num, user.district, user.pincode, user.state)

        cursor.execute(sql, val)
        mydb.commit()
        return {"message": "Registration successful"}
    except mysql.connector.Error as e:
        if isinstance(e, mysql.connector.errors.IntegrityError) and e.errno == 1062:
            raise HTTPException(status_code=400, detail=f"Username '{user.username}' already exists. Please log in instead.")
        else:
            raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")



@app.post("/login/")
def login_user(user: User):
    logger.info("Logging from the login_user function")
    username = user.username
    password = user.password
    user_info = check_credentials(username, password)
    
    if user_info:
        return JSONResponse(
            status_code=200,
            content={"message": "Wow! You have been logged in successfully"}
        )
    else:
        raise HTTPException(
            status_code=401,
            detail="Username or Password does not match. Retry or Signup."
        )

def check_credentials(username, password):
    logger.info("Entering check_credentials function")
    logger.info(username)
    logger.info(password)
    cursor = mydb.cursor(dictionary=True)
    cursor.execute(f"SELECT * FROM user WHERE USERNAME = '{username}' AND PASSWORD = '{password}'")
    results = cursor.fetchall()
    logger.info(results)
    return results  # Return the user information if found, else None


@app.post("/adminlogin/")
def loginUser(user: User):
    logger.info("logging from the loginUser function");
    username=user.username
    password=user.password
    user= login_user(username,password)
    if user:
        return JSONResponse(
                status_code=200,
            content={"message": "WoW! You have been logged in successfully"}
                )
    else:
        return JSONResponse(
            status_code=418,
            content={"message": "Username or Password does not match. Retry or Signup."}
            )
   

def login_user(username,password):
    logger.info("Entering login_user function");
    logger.info(username)
    logger.info(password)
    cursor = mydb.cursor(dictionary=True)
    cursor.execute(f"SELECT * FROM admin WHERE USERNAME = '{username}'AND PASSWORD='{password}'")
    results = cursor.fetchall()
    logger.info(results)
    if not results:
       return False
    else:
       return {"user": results}

@app.post("/cart/")
async def add_book(cart: Cart):
    logger.info("logging from the add books to cart function");
    logger.info(cart.cart_id)
    logger.info(cart.username)
    logger.info(cart.book_id)
    logger.info(cart.quantity)
    cursor = mydb.cursor(dictionary=True)
    sql = "INSERT INTO cart (cart_id, username, book_title,book_id,  quantity) VALUES (%s, %s, %s, %s,%s)"
    val = (cart.cart_id,cart.username, cart.book_title,cart.book_id ,  cart.quantity)
    cursor.execute(sql, val)
    mydb.commit()
    return {"message": "Book added to cart successfully"}


@app.post("/contact/")
async def add_query(contact: Contact):
    
    cursor = mydb.cursor(dictionary=True)
    sql = "INSERT INTO contact (username, email, message) VALUES (%s, %s, %s)"
    val = (contact.username,contact.email,contact.message)
    cursor.execute(sql, val)
    mydb.commit()
    return {"message": "message sent successfully"}