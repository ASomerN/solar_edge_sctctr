let dashboard_left = '#dashboard_left';

const observer = new MutationObserver(function(mutations_list) {
	render_house_changes();
    //console.log("observed mutation");
	document.querySelector("[data-ref='innerCt']").firstChild.style.width = "45vw";
});

const render_house_changes = () => {
	let house_icon = document.querySelector('[src="/solaredge-web/common/img/sem/load/Active.svg"]');
	house_icon.style.display = "none"
	let comparative_energy_panel = document.getElementById("se-comparative-energy-panel");
	comparative_energy_panel.style.width = "45%";
	
	let power_energy_panel = document.getElementById("power_energy_panel");
	power_energy_panel.style.right = "2.5vw";
	power_energy_panel.style.top = "0px";
	
	document.querySelector(dashboard_left).style.width = "45%";
	
	var power_box = document.querySelector(".se-double-power-box")
	var divContainer = power_box.parentElement;
	divContainer.style.width = "45vw";
	divContainer.parentElement.style.width = "45vw";
	divContainer.parentElement.parentElement.style.width = "45vw";
	divContainer.parentElement.parentElement.parentElement.style.width = "45vw";
		
	
	divContainer.childNodes[0].style.width = "8vw";
	divContainer.childNodes[2].style.width = "8vw";
	divContainer.childNodes[2].style.left = "37vw";
	divContainer.childNodes[1].style.width = "29vw";
	divContainer.childNodes[1].style.left = "8vw";
}

const hide_right_content = () => {
	document.getElementById("dashboard_right").style.display = "none";
}

const set_backdrop = () => {
	/* These appear to work for main
	width: 100vw;
    height: 200vh;
    position: fixed;
    top: -100px;
	*/
	
	let main = document.getElementById("main");
	main.style.width = "100vw"; //make the white background full width
	main.style.height = "200vh"; //make the background much taller than required
	main.style.position = "fixed"; //set to fixed so it doesn't respond to flex changes
	main.style.top = "-150px"; // offset the page to remove navigation view
	
	/* These work for dashboard
	width: 95vw;
    left: 2.5vw;
	*/
	
	let dashboard = document.getElementById("dashboard");
	dashboard.style.width = "95vw"
	dashboard.style.left = "2.5vw"
	// id = se-overview-panel-innerCt
	
	// id=se-comparative-energy-panel
	let comparative_energy_panel = document.getElementById("se-comparative-energy-panel");
	comparative_energy_panel.style.width = "45%";
	
	let power_energy_panel = document.getElementById("power_energy_panel");
	power_energy_panel.style.right = "2.5vw";
	power_energy_panel.style.top = "0px";
	
	document.querySelector(dashboard_left).style.width = "45%";
	
	var power_box = document.querySelector(".se-double-power-box")
	var divContainer = power_box.parentElement;
	divContainer.style.width = "45vw";
	divContainer.parentElement.style.width = "45vw";
	divContainer.parentElement.parentElement.style.width = "45vw";
	divContainer.parentElement.parentElement.parentElement.style.width = "45vw";
		
	
	divContainer.childNodes[0].style.width = "8vw";
	divContainer.childNodes[2].style.width = "8vw";
	divContainer.childNodes[2].style.left = "37vw";
	divContainer.childNodes[1].style.width = "29vw";
	divContainer.childNodes[1].style.left = "8vw";

}

hide_right_content();
set_backdrop();
observer.observe(document.querySelector(dashboard_left), { subtree: true, childList: true });