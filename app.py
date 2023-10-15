import streamlit as st

st.set_page_config(layout="wide", page_title="Personal Carbon Calculator")

# Define emission factors (example values, replace with accurate data)
EMISSION_FACTORS = {
    "India": {
        "Transportation": 0.14,  # kgCO2/km
        "Electricity": 0.82,  # kgCO2/kWh
        "Diet": 1.25,  # kgCO2/meal, 2.5 kgCO2/kg
        "Waste": 0.1  # kgCO2/kg
    },
    "UK": {
        "Transportation": 0.12,  # kgCO2/km 
        "Electricity": 0.21,  # kgCO2/kWh 
        "Diet": 1.0,  # kgCO2/meal 
        "Waste": 0.4  # kgCO2/kg 
    },
    "USA": {
        "Transportation": 0.19,  # kgCO2/mile 
        "Electricity": 0.41,  # kgCO2/kWh 
        "Diet": 1.5,  # kgCO2/meal 
        "Waste": 0.6  # kgCO2/kg 
    },
    "France": {
        "Transportation": 0.09,  # kgCO2/km 
        "Electricity": 0.05,  # kgCO2/kWh 
        "Diet": 0.8,  # kgCO2/meal 
        "Waste": 0.3  # kgCO2/kg 
    },
    "Australia": {
        "Transportation": 0.18,  # kgCO2/km 
        "Electricity": 0.82,  # kgCO2/kWh 
        "Diet": 1.2,  # kgCO2/meal 
        "Waste": 0.5  # kgCO2/kg 
    },
    "China": {
        "Transportation": 0.15,  # kgCO2/km 
        "Electricity": 0.71,  # kgCO2/kWh 
        "Diet": 1.6,  # kgCO2/meal 
        "Waste": 0.7  # kgCO2/kg 
    },
    "South Africa": {
        "Transportation": 0.17,  # kgCO2/km 
        "Electricity": 0.85,  # kgCO2/kWh 
        "Diet": 1.4,  # kgCO2/meal 
        "Waste": 0.6  # kgCO2/kg 
     },
    "Germany": {
        "Transportation": 0.13,  # kgCO2/km 
        "Electricity": 0.36,  # kgCO2/kWh 
        "Diet": 1.1,  # kgCO2/meal 
        "Waste": 0.4  # kgCO2/kg 
    },
    "Russia": {
        "Transportation": 0.15,  # kgCO2/km 
        "Electricity": 0.41,  # kgCO2/kWh 
        "Diet": 1.3,  # kgCO2/meal 
        "Waste": 0.8  # kgCO2/kg 
    }
}

# Set wide layout and page name

# Streamlit app code
st.title("Personal Carbon Calculator App ⚠️")

# User inputs
st.subheader("🌍 Your Country")
country = st.selectbox("Select", ["India","UK","USA","France","Australia","China","South-Africa","Germany","Russia"])
week = st.number_input("Week:", 0, key="week_number")


col1, col2 = st.columns(2)

with col1:
    st.subheader("🚗 Weekly commute distance (in km)")
    distance = st.slider("Distance", 0.0, 100.0*10, key="distance_input")

    st.subheader("💡 Weekly electricity consumption (in kWh)")
    electricity = st.slider("Electricity", 0.0, 1000.0*10, key="electricity_input")

with col2:
    st.subheader("🍽️ Waste generated per week (in kg)")
    waste = st.slider("Waste", 0.0, 100.0*10, key="waste_input")

    st.subheader("🍽️ Number of meals per week on average")
    meals = st.number_input("Meals", 0, key="meals_input")

# # Normalize inputs
# if distance > 0:
#     distance = distance * 52  # Convert daily distance to yearly
# if electricity > 0:
#     electricity = electricity * 52 # Convert monthly electricity to yearly
# if meals > 0:
#     meals = meals * 52  # Convert daily meals to yearly
# if waste > 0:
#     waste = waste * 52  # Convert weekly waste to yearly

# Calculate carbon emissions
transportation_emissions = EMISSION_FACTORS[country]["Transportation"] * distance
electricity_emissions = EMISSION_FACTORS[country]["Electricity"] * electricity
diet_emissions = EMISSION_FACTORS[country]["Diet"] * meals
waste_emissions = EMISSION_FACTORS[country]["Waste"] * waste

# Convert emissions to tonnes and round off to 2 decimal points
transportation_emissions = round(transportation_emissions / 1000, 2)
electricity_emissions = round(electricity_emissions / 1000, 2)
diet_emissions = round(diet_emissions / 1000, 2)
waste_emissions = round(waste_emissions / 1000, 2)

# Calculate total emissions
total_emissions = round(
    transportation_emissions + electricity_emissions + diet_emissions + waste_emissions, 2
)

if st.button("Calculate CO2 Emissions"):

    # Display results
    st.header("Results")

    col3, col4 = st.columns(2)

    with col3:
        st.subheader("Carbon Emissions by Category")
        st.info(f"🚗 Transportation: {transportation_emissions} tonnes CO2 per week")
        st.info(f"💡 Electricity: {electricity_emissions} tonnes CO2 per week")
        st.info(f"🍽️ Diet: {diet_emissions} tonnes CO2 per week")
        st.info(f"🗑️ Waste: {waste_emissions} tonnes CO2 per week")

    with col4:
        st.subheader("Total Carbon Footprint")
        st.success(f"🌍 Your total carbon footprint is: {total_emissions} tonnes CO2 per week")
        if(country=="India"):    
            st.warning("In 2021, CO2 emissions per capita for India was 1.9 tons of CO2 per capita. Between 1972 and 2021, CO2 emissions per capita of India grew substantially from 0.39 to 1.9 tons of CO2 per capita rising at an increasing annual rate that reached a maximum of 9.41% in 2021")
        if(country=="UK"):
            st.warning("In September 2021, the United Kingdom's carbon dioxide (CO2) emissions per capita were approximately 5.5 metric tons per person per year. Please note that this value can change over time due to changes in energy sources, industrial activities, and other factors that affect a country's greenhouse gas emissions.")
        if(country=="USA"):
            st.warning("In 2021, CO2 emissions per capita for United States of America was 14.24 tons of CO2 per capita. Though United States of America CO2 emissions per capita fluctuated substantially in recent years, it tended to decrease through 1972 - 2021 period ending at 14.24 tons of CO2 per capita in 2021.")
        if(country=="France"):
            st.warning("In September 2021, the carbon dioxide (CO2) emissions per capita in France were approximately 4.5 metric tons per person per year. Please note that this value can change over time due to various factors, including changes in energy sources, industrial activities, and environmental policies.")
        if(country=="Australia"):
            st.warning("In September 2021, Australia's carbon dioxide (CO2) emissions per capita were relatively high, at around 16 metric tons per person per year. Australia's high per capita emissions are largely due to its reliance on coal for electricity generation, large landmass, and energy-intensive industries.")
        if(country=="South-Africa"):
            st.warning("In September 2021, South Africa's carbon dioxide (CO2) emissions per capita were approximately 8.6 metric tons per person per year. Please keep in mind that these values can change over time due to various factors, including changes in energy sources, industrial activities, and policies aimed at reducing greenhouse gas emissions.")
        if(country=="China"):
            st.warning("In September 2021, China's carbon dioxide (CO2) emissions per capita were estimated to be around 7.1 metric tons per person per year. It's important to note that this value can vary from year to year and may have changed since then, as China's emissions and policies related to climate change have been evolving.")
        if(country=="Russia"):
            st.warning("In September 2021, Russia's carbon dioxide (CO2) emissions per capita were approximately 11.6 metric tons per person per year. Please note that this value can change over time due to changes in energy sources, industrial activities, and other factors that affect a country's greenhouse gas emissions.")
        if(country=="Germany"):
            st.warning("In September 2021, Germany's carbon dioxide (CO2) emissions per capita were approximately 9.7 metric tons per person per year. Please keep in mind that this value can change over time due to changes in energy sources, industrial activities, and other factors that impact a country's greenhouse gas emissions.")    
