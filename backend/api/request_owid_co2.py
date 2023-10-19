import requests
import json


def filter_json_by_countries(json_url, output_ph_file, output_world_file):
    response = requests.get(json_url)
    if response.status_code == 200:
        json_data = response.json()
        if "Philippines" in json_data and "World" in json_data:
            philippines_data = json_data["Philippines"]["data"]
            world_data = json_data["World"]["data"]
            with open(output_ph_file, "w") as ph_output_f:
                json.dump(philippines_data, ph_output_f, indent=4)
            with open(output_world_file, "w") as world_output_f:
                json.dump(world_data, world_output_f, indent=4)
            return True
        else:
            print("Data for 'Philippines' or 'World' not found in JSON data.")
            return False
    else:
        print(f"Failed to fetch data. Status code: {response.status_code}")
        return False


json_url = "https://nyc3.digitaloceanspaces.com/owid-public/data/co2/owid-co2-data.json"

output_ph_file = "owid_ph_co2_data.json"
output_world_file = "owid_world_co2_data.json"

if filter_json_by_countries(json_url, output_ph_file, output_world_file):
    print(f"Filtered data for 'Philippines' saved to '{output_ph_file}'")
    print(f"Filtered data for 'World' saved to '{output_world_file}'")
else:
    print("Filtering and saving failed.")
