export type Project = {
  id: string
  title: string
  eyebrow: string
  description: string
  details: string
  tags: string[]
  category: 'AI / ML' | 'Data Science' | 'Web Applications'
  status: string
  accent: string
  features: string[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    id: 'maritime',
    title: 'Maritime Freight Forecasting',
    eyebrow: 'Decision support system',
    description: 'Route-aware forecasting and charter optimization for dry-bulk maritime routes along India’s East Coast.',
    details: 'A practical forecasting architecture built around route-specific models and multiple forecast horizons. The interface turns model outputs into clear chartering scenarios and market signals rather than hiding them behind a black box.',
    tags: ['Python', 'Scikit-learn', 'SHAP', 'Streamlit'],
    category: 'AI / ML',
    status: 'In progress',
    accent: 'cyan',
    features: ['Route-specific freight forecasts', 'Scenario and vessel-port compatibility checks', 'BUY, WAIT and HOLD / MONITOR signals', 'Confidence intervals and explainability where supported'],
  },
  {
    id: 'churn',
    title: 'SaaS Customer Churn',
    eyebrow: 'Classification workflow',
    description: 'A customer-risk analysis workflow that estimates subscription churn from plan, payment and engagement signals.',
    details: 'An end-to-end classification project with deliberate attention to imbalanced data. Validation results, threshold choices and feature patterns are surfaced honestly so experiments are not mistaken for production guarantees.',
    tags: ['Python', 'Random Forest', 'FastAPI', 'Feature engineering'],
    category: 'Data Science',
    status: 'Experimenting',
    accent: 'violet',
    features: ['EDA and subscription feature engineering', 'ROC-AUC, average precision, precision, recall and F1', 'Threshold tuning for imbalanced classification', 'Feature importance and churn pattern analysis'],
  },
  {
    id: 'resume',
    title: 'Resume Analyzer',
    eyebrow: 'NLP application',
    description: 'An NLP application that classifies resumes into 24 categories using TF-IDF features and a Support Vector Machine.',
    details: 'The project explores how text preprocessing and classical machine learning can support more relevant resume categorization. PDF extraction and clear result presentation keep the experience grounded in a useful workflow.',
    tags: ['NLP', 'TF-IDF', 'SVM', 'Scikit-learn'],
    category: 'AI / ML',
    status: 'Prototype',
    accent: 'amber',
    features: ['PDF resume text extraction', 'Text preprocessing and vectorization', '24-category resume classification', 'Potential relevance recommendations'],
  },
  {
    id: 'ecoscan',
    title: 'EcoScan AI',
    eyebrow: 'Waste awareness concept',
    description: 'A waste detection concept designed to help people identify categories and make more responsible disposal decisions.',
    details: 'EcoScan AI connects a friendly interface to a model-backed prediction workflow. The concept is intentionally framed as a foundation for future segregation guidance, not as a finished environmental authority.',
    tags: ['FastAPI', 'HTML', 'Tailwind CSS', 'Vercel'],
    category: 'Web Applications',
    status: 'Concept',
    accent: 'green',
    features: ['Waste detection interface', 'Model prediction backend integration', 'Simple and approachable frontend', 'Future segregation guidance expansion'],
  },
  {
    id: 'credit',
    title: 'Credit Risk Prediction',
    eyebrow: 'Applied ML',
    description: 'A machine learning application that estimates credit risk from structured applicant and financial information.',
    details: 'This project focuses on the connective tissue between a structured form and a serialized model: reliable preprocessing, a prediction endpoint and an interface that makes the output understandable.',
    tags: ['Python', 'Pandas', 'FastAPI', 'joblib'],
    category: 'AI / ML',
    status: 'In progress',
    accent: 'blue',
    features: ['Structured input form', 'Preprocessed feature handling', 'Saved model integration', 'FastAPI prediction endpoint'],
  },
  {
    id: 'mental-health',
    title: 'Mental Health Score',
    eyebrow: 'Responsible prediction study',
    description: 'A structured-data project exploring how predictive models can estimate a mental-health-related score.',
    details: 'This is an exploratory learning project, not a clinical tool. It uses preprocessing pipelines and model experimentation to study responsible deployment boundaries and the importance of professional context.',
    tags: ['Python', 'Logistic Regression', 'SVM', 'FastAPI'],
    category: 'Data Science',
    status: 'Exploration',
    accent: 'rose',
    features: ['Structured-data preprocessing', 'Logistic Regression and SVM experiments', 'Scikit-learn pipelines', 'Model serialization and API exploration'],
  },
]

export const skillGroups = [
  { title: 'Programming', status: 'Using', items: ['Python', 'SQL', 'C', 'JavaScript','java'] },
  { title: 'Data & Analytics', status: 'Using', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Excel', 'Power BI', 'Tableau'] },
  { title: 'Machine Learning', status: 'Using + learning', items: ['Scikit-learn', 'Regression', 'SVM', 'Tree models', 'XGBoost', 'LightGBM', 'CatBoost', 'PCA', 'K-Means', 'SHAP'] },
  { title: 'Backend & Apps', status: 'Using', items: ['FastAPI', 'REST APIs', 'Streamlit', 'Uvicorn', 'HTML', 'CSS', 'Tailwind CSS'] },
  { title: 'Databases', status: 'Learning', items: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB'] },
  { title: 'Tools & Deployment', status: 'Using + learning', items: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'Docker', 'Vercel', 'Linux', 'Hadoop basics'] },
]
