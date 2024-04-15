// Array to hold details about different healthcare services
const services = [
    {
      id: 1,
      title: "General Consultation",
      description: "Consult with our general physicians for a comprehensive health check and primary care.",
      availability: "Available Today at 3:00 PM",
      slotsAvailable: 15,
      image: "assets/general_consultation.jpg"
    },
    {
      id: 2,
      title: "Dental Checkup",
      description: "Get a professional dental cleaning and examination to maintain your oral health.",
      availability: "Available Tomorrow at 10:00 AM",
      slotsAvailable: 8,
      image: "assets/dental_checkup.jpg"
    },
    {
      id: 3,
      title: "Pediatric Care",
      description: "Special care and consultations for children, ensuring their growth and health.",
      availability: "Available Monday at 2:00 PM",
      slotsAvailable: 12,
      image: "assets/pediatric_care.jpg"
    }
  ];
  
  // Function to populate the list of healthcare services
  function populateServiceList() {
    const serviceList = document.getElementById('films');
    serviceList.innerHTML = ''; // Clear existing entries
  
    services.forEach(service => {
      const listItem = document.createElement('li');
      listItem.className = 'film item';
      listItem.textContent = service.title;
      listItem.onclick = () => showServiceDetails(service);
      serviceList.appendChild(listItem);
    });
  }
  
  // Function to display details of a service
  function showServiceDetails(service) {
    const poster = document.getElementById('poster');
    poster.src = service.image;
    poster.alt = service.title;
  
    document.getElementById('title').textContent = service.title;
    document.getElementById('runtime').textContent = service.availability;
    document.getElementById('film-info').textContent = service.description;
    document.getElementById('showtime').textContent = service.availability;
    document.getElementById('ticket-num').textContent = service.slotsAvailable + " slots remaining";
  
    const buyButton = document.getElementById('buy-ticket');
    buyButton.textContent = "Book Appointment";
    buyButton.onclick = () => bookAppointment(service);
  }
  
  // Function to book an appointment for a healthcare service
  function bookAppointment(service) {
    if (service.slotsAvailable > 0) {
      service.slotsAvailable--;
      alert("Appointment booked successfully! " + service.slotsAvailable + " slots remaining.");
      showServiceDetails(service); // Update details on the page
    } else {
      alert("All slots are booked. Please check for other timings or services.");
    }
  }
  
  // Initialize the list on page load
  document.addEventListener('DOMContentLoaded', populateServiceList);
  
  // Refresh services button event listener
  document.getElementById('refreshServices').addEventListener('click', () => {
      populateServiceList();
      alert("Service list refreshed!");
  });