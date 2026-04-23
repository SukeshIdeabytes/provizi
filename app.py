from flask import Flask, request, send_file, jsonify
import json
import main

app = Flask(__name__)

@app.route('/generate-doc', methods=['POST'])
def generate_doc():
    try:
        print("FILES RECEIVED:", request.files)
        print(request.files)

        if 'file' not in request.files:
            return jsonify({"error": "No file uploaded"}), 400

        uploaded_file = request.files['file']
        if uploaded_file.filename == "":

            return jsonify({"error": "No file selected"}), 400
        data = json.load(uploaded_file)
        output_path = main.main(data)

        return send_file(output_path, as_attachment=True)

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)
 