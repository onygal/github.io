const route = (event) => {
     event = event || window.event;
     event.preventDefault();
     window.history.pushState(null, null, event.target.href);
     handleLocation();
};

const routes = {
404: "github.io/pages/404.html",
"/": "/pages/index.html",
"/github.io/": "/pages/index.html",
"/github.io/Biography": "/pages/biography.html",
"/github.io/Education": "/pages/education.html"
};

const handleLocation = async () => {
     const path = window.location.pathname;
     const route = routes[path] || routes[404];
     const html = await fetch(route).then((data) => data.text());
     document.getElementById("main-content").innerHTML = html;
   };

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
