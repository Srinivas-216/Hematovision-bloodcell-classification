# HematoVision - Blood Cell Classification

HematoVision is a web-based application that allows users to classify different types of blood cells using AI-powered image recognition. Users can upload microscopic blood cell images, and the system will predict the type of cell using a machine learning model.

---

## 🔬 Project Overview

Blood cell classification plays a crucial role in diagnosing blood-related diseases such as anemia, leukemia, and infections. HematoVision assists medical professionals by offering a quick, AI-assisted cell identification tool directly in the browser.

---

## 📸 Features

- Upload and preview blood cell images in the browser
- Classify images using a trained deep learning model via a Flask backend
- Simple, responsive, and clean UI
- Display model prediction results clearly

---

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla JS)

### Backend
- Python 3.x
- Flask
- TensorFlow / PyTorch / scikit-learn (depending on the model used)
- Pillow (for image handling)

---

## 📁 Project Structure

HematoVision/
│
├── static/
│ ├── style.css # Stylesheet
│ └── script.js # JavaScript for image preview and form
│
├── templates/
│ └── index.html # Main HTML page served by Flask
│
├── model/
│ └── model.h5 # Pre-trained ML model (e.g., Keras or TorchScript)
│
├── app.py # Flask backend
├── requirements.txt # Python dependencies
└── README.md # This file
          
---

## ⚙️ Setup Instructions

### 🔧 Prerequisites

- Python 3.7+
- pip package manager
- Virtual environment (recommended)

---

### 📦 Backend Setup

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/HematoVision.git
cd HematoVision
2.Create and activate a virtual environment:

bash
Copy
Edit
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
          3.install the required dependencies:

bash
Copy
Edit
pip install -r requirements.txt
          4.Start the Flask server:

bash
Copy
Edit
python app.py
         5.Access the app in your browser:

Go to http://127.0.0.1:5000/ in your browser.
