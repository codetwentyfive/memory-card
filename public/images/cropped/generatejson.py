import os
import json

def get_file_names(folder_path):
    file_names = []
    folder_name= "images/cropped/"
    for filename in os.listdir(folder_path):
        if filename.endswith(('.jpg', '.jpeg', '.png', '.gif')):
            name_without_extension = os.path.splitext(filename)[0]
            file_names.append({"name": name_without_extension, "image": folder_name+filename})
    return file_names

def write_to_json(file_names, output_file):
    with open(output_file, 'w') as json_file:
        json.dump(file_names, json_file, indent=2)

def main():
    folder_path = input("Enter the folder path: ")
    output_file = input("Enter the output JSON file path: ")

    file_names = get_file_names(folder_path)
    write_to_json(file_names, output_file)

if __name__ == "__main__":
    main()
