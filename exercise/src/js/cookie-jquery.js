class JQueryCookieManagement{
	
	setCookie(name,value = ""){
	    let date = new Date();
	    date.setTime(date.getTime() + (24*60*60*1000));
		const expires = "; expires=" + date.toUTCString();
	    const path = "; path=/";
	    document.cookie = `${name}=${value}${expires}${path}`;
	}
	
	eraseCookie(name){   	
	    document.cookie = name+'=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;';
	}
	
	getCookie(){
		if(document.cookie === "") return [];
					
		return document.cookie.split("; ").map(cookie => {
			const [name, value] = cookie.split("=");
			return {name, value};
		});
	}
	
	constructor()
	{
		var dic = this.getCookie();
		const container = $("<div>", { class: "extension-cookie-management-container"});
		var ul = $("<ul>");
		dic.forEach(element => {
			var li = $("<li>", { text: `${element.name} : ${element.value}`});
			ul.append(li)
		});
		container.append(ul);	
		$("#extension-cookie-management-jquery").append(container);
	}
}

new JQueryCookieManagement();