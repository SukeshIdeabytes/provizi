## overview
This project is a Python-based automated document generation system that creates structured Word documents (.docx) using a JSON configuration file and a DOCX template.
The system exposes a REST API using Flask that allows users to upload a JSON configuration file and receive a dynamically generated Word document as a downloadable response.
This approach separates content (JSON) from formatting (DOCX template), enabling automated and consistent document creation without manually editing Word files.

## Key Features
- Automated generation of Word documents from JSON configuration
- Uses a predefined DOCX template for consistent formatting
- REST API interface for document generation
- Dynamic insertion of headings, paragraphs, and sections
- Hierarchical section sorting (e.g., 1, 1.1, 1.2, 2)
- Maintains proper Word document structure
- Handles errors and invalid inputs gracefully

## Technologies Used
- Python
- Flask
- python-docx
- JSON
- WordprocessingML (DOCX XML Structure)

## Project Structure
project-root/
app.py  
main.py  
constants.py  
template.docx  
index.json  
README.md  
### File Descriptions
app.py  
Flask application that exposes the document generation service as an API.
main.py  
Contains the core document generation logic that processes JSON input and generates the DOCX file.
constants.py  
Defines reusable constants such as styles, namespaces, and formatting configurations.
template.docx  
A predefined Word template used as the base document structure.
index.json  
Configuration file that defines the structure and content of the generated document.
README.md  
Documentation explaining the project.

## System Architecture
Client (Postman / Application)  
↓  
Flask API (app.py)  
↓  
JSON Configuration Processing  
↓  
Document Generation Logic (main.py)  
↓  
DOCX Template Processing  
↓  
Generated Word Document Response

## How the System Works
1. A client sends a POST request to the API with a JSON configuration file.
2. The API receives the file using Flask request handling.
3. The uploaded file is parsed into a Python dictionary.
4. The configuration data is passed to the document generator in main.py.
5. The generator processes sections, headings, and paragraphs.
6. Content is inserted into the Word template using python-docx.
7. The final document is saved and returned as a downloadable file.

## API Documentation
Endpoint  
POST /generate-doc
Request Type  
multipart/form-data
Request Parameter
Parameter: file  
Type: File  
Description: JSON configuration file

## Example Request (Postman)
URL  
http://localhost:5000/generate-doc
Method  
POST
Body → form-data
Key: file  
Value: Upload JSON configuration file

## Example JSON Configuration
{
    "template_file": "Pro-Vizi GreenShield Endpoint Reference PA3.docx",
    "output_file": "Pro-Vizi GreenShield Endpoint Referenc.docx",
    "1": {
        "title": "Reference API Endpoint"
    },
    "1.1": {
        "Client": "Sterling Insurance Brokers Ltd"
    },
    "1.2": {
        "Project": "Pro-Vizi"
    },
    "1.3": {
        "Date": "2026-03-16"
    },
    "1.4": {
        "Author(s)": "M Sai Sukesh Reddy"
    },
    "1.5": {
        "Reviewer(s)": "Anna Anthony"
    },
    "1.6": {
        "Version": "PA3"
    },
    "1.7": {
        "Document No": "1"
    },
}

## Running the Application
Step 1: Install dependencies
pip install flask python-docx
Step 2: Run the Flask server
python app.py
Step 3: Server will start at
http://localhost:5000

## Output
The API generates a fully formatted Word document (.docx) based on the JSON configuration and returns it as a downloadable file.

## Error Handling
The API returns JSON error messages if:
- No file is uploaded
- The uploaded file is empty
- JSON parsing fails
- Document generation fails
Example error response:
{
 "error": "No file uploaded"
}

## Use Cases
- API documentation generation
- Automated report generation
- Policy document creation
- Technical documentation automation
- Structured content generation

## Advantages
- Eliminates manual document editing
- Ensures consistent document structure
- Easy integration with other systems
- Flexible configuration using JSON
- Scalable for automated workflows

## Author
Sukesh Reddy