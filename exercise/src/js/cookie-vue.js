new Vue({
			el: "#extension-cookie-management-vue",
			data:{
				cookies : [],
				newCookieName :'',
				newCookieValue : '',
			},
			created: function(){
				this.cookies = this.getCookie();
			},			
			methods: {			
				getCookie(){
					if(document.cookie === "") return [];
					return document.cookie.split("; ").map(cookie => {
						const [name, value] = cookie.split("=");
						return {name, value};
					});
				},				
			    setCookie(name,value = ""){
					console.log(`SetCookie...."${name}"`);
				    let date = new Date();
				    date.setTime(date.getTime() + (24*60*60*1000));
					const expires = "; expires=" + date.toUTCString();
				    const path = "; path=/";
				    document.cookie = `${name}=${value}${expires}${path}`;
				},
				eraseCookie(name){
					document.cookie = name+'=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;';
					this.cookies = this.getCookie();
				},
				addCookie(){
					this.setCookie(this.newCookieName,this.newCookieValue);
					this.cookies = this.getCookie();
				}
			},
			template: ` 
				<div class="extension-cookie-management-container">
					<!-- start here!!! -->
					<ul>
						<li v-for="cookie in cookies">
							{{cookie.name}}:{{cookie.value}}
							<input type="button" @click="eraseCookie(cookie.name)" value="X"/>
						</li>
					</ul>
					<hr>
					<div>
						Name: <input type="input" v-model="newCookieName" />
						Value: <input type="input" v-model="newCookieValue" />
						<input type="button" @click="addCookie()" value="New"/>
						<!-- <input type="button" @click="setCookie(this.newCookieName,this.newCookieValue)" value="New"/> -->
					</div>
				</div>
			`
		});