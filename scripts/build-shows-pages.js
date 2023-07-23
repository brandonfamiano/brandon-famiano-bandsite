class Show {
    constructor(id, date, place, location) {
      this.id = id;
      this.date = date;
      this.place = place;
      this.location = location;
    }
  
    render() {
      let shows = document.createElement("li");
      let date = document.createElement('h4');
      let venue = document.createElement('h3');
      let location = document.createElement('h2');
      let link = document.createElement('button');

      const showDate = new Date(parseInt(this.date));
      const formattedDate = new Intl.DateTimeFormat('en-US').format(showDate);

  
      date.innerText = formattedDate;
      venue.innerText = this.place;
      location.innerText = this.location;
      link.innerText = "BUY TICKETS";
      link.style.cursor = "pointer";
      link.onclick = function () {
        window.open("https://www.ticketmaster.com");
      }
  
      shows.appendChild(date);
      shows.appendChild(venue);
      shows.appendChild(location);
      shows.appendChild(link);
  
      return shows;
    }
  }
  
  const getShows = async () => {
    try {
      const response = await axios.get("https://project-1-api.herokuapp.com/showdates?api_key=brandon-famiano");
      return response.data;
    } catch (error) {
      console.error("Error fetching shows", error);
      return [];
    }
  };
  
  const renderShows = async () => {
    let container = document.getElementById("shows__container");
    let datelabel = document.createElement('h5');
    let venuelabel = document.createElement('h5');
    let locationlabel = document.createElement('h5');
    datelabel.innerText = "Date";
    venuelabel.innerText = "Venue";
    locationlabel.innerText = "Location";
    let tablet = document.createElement("div");
    tablet.appendChild(datelabel);
    tablet.appendChild(venuelabel);
    tablet.appendChild(locationlabel);
    container.appendChild(tablet);
  
    let showsHeader = document.createElement("h1");
  
    const showsArray = await getShows();
    showsArray.forEach((show) => {
      const showInstance = new Show(show.id, show.date, show.place, show.location);
      const renderedShow = showInstance.render();
      container.appendChild(renderedShow);
    });
  
    let graySelect = document.querySelectorAll('li');
    graySelect.forEach((element) => {
      element.onclick = function (e) {
        graySelect.forEach((el) => {
          el.classList.remove("selected");
        });
        element.classList.add("selected");
      };
    });
  };
  document.addEventListener("DOMContentLoaded", renderShows);
  