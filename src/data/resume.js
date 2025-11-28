import { FaPython, FaRProject, FaDatabase, FaAws, FaDocker, FaGitAlt, FaChartBar } from 'react-icons/fa';
import { SiTensorflow, SiKeras, SiScikitlearn, SiNumpy, SiPandas, SiMongodb, SiPostman, SiJenkins, SiKubernetes, SiTableau } from 'react-icons/si';

export const resumeData = {
    personalInfo: {
        name: "Aishwarya Pujitha",
        title: "MADS Student at UVic | Data Scientist",
        email: "aishwarya.pujitha@gmail.com",
        phone: "+1 7786789652",
        location: "Victoria, BC",
        linkedin: "https://www.linkedin.com/in/aishwarya-pujitha23/",
        github: "https://github.com/AishwaryaO23",
        summary: "Currently pursuing Masters of Applied Data Science at the University of Victoria. Experienced Data Scientist with a strong background in Machine Learning, NLP, and Data Analytics.",
        about: "Hey! I'm Aishwarya, a data scientist who loves finding the stories hidden inside numbers. I've always been curious about how things work, which led me from building AI models to diving deep into data analytics.\n\nI'm currently leveling up my skills with a Master's in Applied Data Science at UVic. Before this, I spent some time in the industry building everything from chatbot classifiers to automated reporting tools. I'm all about using tech to solve real problems—whether that's helping a business understand their customers or just making a workflow a little less painful.\n\nWhen I'm not coding or staring at graphs, you'll probably find me exploring Victoria, trying out new coffee spots, or getting lost in a good book."
    },
    skills: [
        { name: "Python", icon: FaPython },
        { name: "R", icon: FaRProject },
        { name: "C/C++", icon: null },
        { name: "SQL", icon: FaDatabase },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Scikit-learn", icon: SiScikitlearn },
        { name: "NumPy", icon: SiNumpy },
        { name: "Pandas", icon: SiPandas },
        { name: "TensorFlow", icon: SiTensorflow },
        { name: "Keras", icon: SiKeras },
        { name: "NLP", icon: null },
        { name: "AWS", icon: FaAws },
        { name: "Git", icon: FaGitAlt },
        { name: "Docker", icon: FaDocker },
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "Tableau", icon: SiTableau },
        { name: "Power BI", icon: FaChartBar }
    ],
    experience: [
        {
            title: "AI Developer",
            company: "REP Group",
            location: "United Kingdom",
            period: "September 2024 – March 2025",
            description: [
                "Developed and deployed machine learning models in Scikit-learn using logistic regression to classify narrative text into 6 distinct categories.",
                "Automated end-to-end report generation using Pandoc, nbconvert, and LaTeX, integrating LLM-powered text summarisation with visualisations in Matplotlib and Seaborn.",
                "Designed and deployed interactive Shiny and Flask applications on AWS EC2, enabling users to upload, analyse, and download customised reports."
            ]
        },
        {
            title: "Data Scientist",
            company: "Saal.ai",
            location: "Abu-Dhabi, UAE",
            period: "April 2021– August 2022",
            description: [
                "Enhanced the accuracy of a decision tree classifier in a learning management system, achieving a 10% improvement in user performance prediction.",
                "Developed user-behaviour clustering based on their engagement and performance metrics, facilitating more personalised user experiences.",
                "Developed higher order network models to analyse user engagement patterns, resulting in improved accuracy of content recommendations.",
                "Implemented dashboard APIs using Flask that provided real-time text insights on user performance.",
                "Leveraged NLP with NLTK and implemented a Support Vector Machine (SVM) model to classify chatbot query intents, improving the chatbot's response accuracy by 12%.",
                "Engineered a web scraper using BeautifulSoup and Gensim, which summarised text content, reducing manual effort.",
                "Mentored a data science intern for 3 months."
            ]
        },
        {
            title: "Data Science Intern",
            company: "Saal.ai",
            location: "Abu-Dhabi, UAE",
            period: "January 2021 – April 2021",
            description: [
                "Consolidated multiple data sets into a unified MongoDB database, enhancing data integrity and accessibility for cross-functional teams.",
                "Enhanced model training on limited datasets by employing data augmentation techniques, including normal distribution transformation and noise injection, to improve model reliability.",
                "Compiled, cleaned, and manipulated large datasets, improving subsequent data handling efficiency."
            ]
        }
    ],
    education: [
        {
            degree: "Master of Applied Data Science",
            institution: "University of Victoria",
            location: "Victoria, BC",
            year: "September 2025 - Present",
            coursework: "Algorithms and Data Models, Information Theory, Optimisation for Machine Learning, Professional Career Development I"
        },
        {
            degree: "Master of Science: Data Science and Advanced Computing",
            institution: "University of Reading",
            location: "Reading, UK",
            year: "September 2023",
            coursework: "Machine Learning, Data Mining, Data Ethics, Big Data, Probability & Statistics"
        },
        {
            degree: "Bachelor of Technology: Computer Science and Systems Engineering",
            institution: "Andhra University",
            location: "Visakhapatnam, India",
            year: "September 2020",
            coursework: "Artificial Intelligence, Algorithms, Data Structures, Discrete Mathematics, Linear Algebra, Calculus"
        }
    ],
    projects: [
        {
            title: "Student Result Classifier (OULAD)",
            description: "Developed a predictive model to classify student outcomes using the OULAD dataset. Implemented a comprehensive pipeline including data preprocessing, SMOTE for class imbalance, and feature engineering. Evaluated Random Forest, SVM, and MLP (Neural Network) models, optimizing for macro recall to handle multi-class distribution.",
            tech: ["Python", "Scikit-learn", "TensorFlow/Keras", "SMOTE", "Pandas"],
            link: "https://github.com/AishwaryaO23/OULAD_classification"
        },
        {
            title: "Narrative Text Classifier",
            description: "Developed and deployed machine learning models in Scikit-learn using logistic regression to classify narrative text into 6 distinct categories.",
            tech: ["Python", "Scikit-learn", "Logistic Regression"]
        },
        {
            title: "Automated Report Generation",
            description: "Automated end-to-end report generation using Pandoc, nbconvert, and LaTeX, integrating LLM-powered text summarisation with visualisations.",
            tech: ["Python", "Pandoc", "LLMs", "Matplotlib"]
        },
        {
            title: "Interactive Data Apps",
            description: "Designed and deployed interactive Shiny and Flask applications on AWS EC2, enabling users to upload, analyse, and download customised reports.",
            tech: ["Flask", "Shiny", "AWS EC2"]
        },
        {
            title: "Chatbot Intent Classifier",
            description: "Leveraged NLP with NLTK and implemented a Support Vector Machine (SVM) model to classify chatbot query intents, improving accuracy by 12%.",
            tech: ["NLP", "NLTK", "SVM"]
        }
    ]
};
