# 🐾 **PenPets: Bringing Pets Closer to Loving Homes** 🏠

## 📑 **Table of Contents**
- [Project Story](#project-story)
- [Key Features](#key-features)
- [Wireframes & Final Design](#wireframes--final-design)
- [Challenges & Learnings](#challenges--learnings)
- [Deployment & Setup](#deployment--setup)
- [Technologies Used](#technologies-used)
- [A Final Note](#a-final-note)

---

## 🌍 **Project Story**
PenPets was born out of a vision to make pet adoption accessible, digital, and interactive. I saw a need for a user-friendly platform where people could browse for pets looking for homes, view their details, and take the first step toward giving them a forever home. I wanted to offer an intuitive and minimalistic design that could touch hearts and promote animal welfare by making adoption an engaging and easy process.

Through PenPets, I bring a compassionate experience that allows users to:

Browse pets by name, age, and breed.
View pets in detail with photos and unique characteristics.
Begin their journey to adoption from the comfort of their screens.
My mission with PenPets is simple: Connect pets in need with people who can offer them a loving home.

---

## 🌟 **Key Features**
- **User-Friendly Interface**
  - **Minimalist Design:** Simple, easy-to-navigate layout designed to keep users focused on pets.
  - **Responsive Design:** Adapts seamlessly to different screen sizes for a great experience on any device.

- **Pet Information**
  - **Detailed Pet Profiles:** Each pet profile includes the pet's name, age, breed, and images, helping adopters get to know their future pet.
  - **Filtering Options:** Users can sort pets by name (A-Z) and age for easier browsing.

- **Secure Login System**
  - **User Registration and Login:** Enables users to create accounts and securely log in.
  - **Admin Access:** Admins have a unique login with access to manage pets and users.

--- 

## 🎨 **Wireframes & Final Design**
![Home Page-1](https://github.com/user-attachments/assets/b9b77d9f-9b2a-4700-b67e-57f6e39bc4a2)
![Home Page](https://github.com/user-attachments/assets/c4e8f013-7cda-479c-96d1-84937275b35f)
![Sign Up page](https://github.com/user-attachments/assets/67acf0d7-b971-403b-aac5-75485fe12dcf)
![Profile Page](https://github.com/user-attachments/assets/4fbadc15-eccd-4d00-a78e-e10cdc6ddcbf)

### **Wireframes**
I initially created wireframes to sketch out PenPets' flow and functionality. Below are examples of the core screens that shaped our vision:
- **Home Page**: Where users can browse pets.
- **Pet Profile Page**: Detailed view with pet’s information and pictures.
- **User Authentication Pages**: Login and Sign-Up screens for secure access.
- **Admin Dashboard**: Special interface for admins to manage pet listings.

---
  
### **Final Design**
![Screenshot 2024-11-04 101810](https://github.com/user-attachments/assets/16cd6e3e-5779-4003-b811-3c665094e9ad)
![Screenshot 2024-11-04 101820](https://github.com/user-attachments/assets/8a8383ff-0321-4404-949d-39d53a202d98)
![Screenshot 2024-11-04 101830](https://github.com/user-attachments/assets/3736c3ae-f4ec-4a47-96ee-c816d3df7259)
![Screenshot 2024-11-04 101737](https://github.com/user-attachments/assets/c985b584-2702-4b44-b023-40a32a191dad)

### Final Design Screens



- **Visual Hierarchy**: Clean layout that highlights important information.
- **Consistency**: Unified colors, fonts, and design elements throughout.
- **Imagery**: Showcasing pets through quality images to build an emotional connection with users.

---

## 🚀 **Challenges & Learnings**
**Key Challenge**: Deployment  
One of the most significant hurdles in this project was deploying PenPets. The journey required me to learn and adapt to Google Cloud Platform (GCP) and AWS, both of which taught me valuable lessons in scalability, security, and reliability.

I grew our knowledge in:

Google Cloud Deployment (GCL): Setting up a GCP project, understanding server and service configurations, and managing resources effectively.
AWS Knowledge: We expanded our knowledge of AWS deployment options and configurations to make our app more accessible.
Learning to deploy PenPets has empowered us to apply these skills to future projects, making us more versatile developers.

## 🛠 **Deployment & Setup**

PenPets is currently live and hosted via Google Cloud. [PenPets Live](https://penpets.oa.r.appspot.com)

### **Deployment Steps**
- **Backend Setup**: MongoDB for data storage, connected to the Node.js backend.
- **Frontend Build**: A React app deployed alongside the backend for easy integration.
- **Static Files on GCP Bucket**: Assets such as images are served from a Google Cloud Bucket for optimal performance.
- **Domain & SSL**: Our site is secured and accessible with a custom domain and SSL setup.

### **Local Setup**
To run PenPets locally:

**Clone this Repository**:
```bash
git clone https://github.com/2Ricky3/PetAdoption.git

Install Dependencies:
bash
Copy code
cd penpets
npm install
Environment Variables: Create a .env file in the root with your MongoDB URI and JWT secret:
makefile
Run the App:
bash
Copy code
npm start
```

---

## 💻 **Technologies Used**
PenPets was created with the following tech stack:

- **Frontend**  
  - 🖥️ **React.js**: For building a responsive and dynamic user interface.
  - 💅 **Styled Components**: For styling components with CSS-in-JS.
  - ⚡ **Axios**: For handling API requests and data fetching.

- **Backend**  
  - 🛠️ **Node.js**: The runtime environment to build and execute server-side JavaScript.
  - 🚀 **Express.js**: A web framework for building RESTful APIs.

- **Database**  
  - 🗄️ **MongoDB** (with Mongoose ORM): A NoSQL database for flexible data storage.

- **Deployment**  
  - ☁️ **Google Cloud Platform (GCP)**: Primary hosting platform for production.
  - 🌐 **AWS**: Used as an additional learning environment for deploying web applications.

- **Storage**  
  - 📂 **Google Cloud Bucket**: Used for storing and serving static assets like images.

---

## 🐶🐱 **A Final Note**
Thank you for exploring PenPets! 🐾 I hope you find joy in my efforts to support animal adoption through a modern, engaging, and effective platform. Every interaction with PenPets brings us closer to our mission of helping animals find their forever homes. 🏡 

---
