# 🔍 Sherlock: Name-Based Gender and Nationality Prediction Web App 🌍👩‍💼👨‍💼

Welcome to **Sherlock**! This web application is your go-to tool for predicting a person's gender and nationalities based on their name. Built with Node.js, Express, and EJS, Sherlock is designed to provide quick, accurate, and visually appealing results. Whether you're curious about the gender distribution of a name or its likely national origins, Sherlock has you covered! 🌐🔍

## 🌟 Features
- 🎯 **Accurate Predictions**: Enter a name and get gender and nationality predictions.
- 🔗 **API Integration**: Utilizes Nationalize.io and Genderize.io for real-time data.
- 💻 **User-Friendly Interface**: Dynamic and responsive UI built with Node.js, Express, and EJS.
- 📊 **Real-Time Visualization**: Displays probabilities and relevant information dynamically.

## 📸 Screenshots
![Sherlock Main Page](https://github.com/SAQLAINAP/Sherlock/blob/master/sherlock.png)

<div style="display: flex; justify-content: center; gap: 50px;">
  <img src="https://github.com/SAQLAINAP/Sherlock/blob/master/sherlock-iphone.png" alt="Sherlock Mobile Page" width="200">
  <img src="https://github.com/SAQLAINAP/Sherlock/blob/master/sherlock-ipad.png" alt="Sherlock Mid-size Page" width="300">
</div>



## 🚀 Demo
Check out the live demo of Sherlock [here](https://example.com).

## 🛠️ Installation
Follow these steps to set up the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sherlock.git
   cd sherlock
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`.

## 📋 Usage
1. Open your browser and go to `http://localhost:3000`.
2. Enter a name in the input field and submit.
3. View the predicted gender and nationalities along with probabilities.

## 📂 Project Structure
```plaintext
Sherlock/
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── countryMapping.js
├── routes/
│   └── index.js
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   └── index.ejs
├── app.js
├── package.json
└── README.md
```

## 🔌 APIs Used
- **[Nationalize.io](https://nationalize.io)**: Predicts the nationalities of a name.
- **[Genderize.io](https://genderize.io)**: Predicts the gender of a name.

## 🌍 Contributing
We welcome contributions to enhance Sherlock! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## 📄 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## ✉️ Contact
For any inquiries, please reach out to [302saqlainahmed@gmail.com](mailto:302saqlainahmed@gmail.com).

---

Happy predicting with Sherlock! 🕵️‍♂️🔮
