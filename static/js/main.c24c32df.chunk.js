(this.webpackJsonptraining=this.webpackJsonptraining||[]).push([[0],{13:function(e,a,n){},14:function(e,a,n){},16:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(2),o=n.n(i),l=(n(13),n(3)),s=n(4),c=n(6),m=n(5),u=n(7),h=function(e){var a=e.id,n=e.name,t=e.email;return r.a.createElement("div",{className:"bg-light-green dib pa3 ma2 grow br3 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?size=270x270"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,t)))},d=function(e){var a=e.robots;return r.a.createElement("div",null,a.map((function(e,n){return r.a.createElement(h,{key:a[n].id,id:a[n].id,name:a[n].name,email:a[n].email})})))},b=function(e){var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robot",onChange:a}))},g=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],p=(n(14),function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(c.a)(this,Object(m.a)(a).call(this))).onSearchChange=function(a){e.setState({searchField:a.target.value})},e.state={robots:g,searchField:""},e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state.robots.filter((function(a){return a.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"RoboFriends"),r.a.createElement(b,{searchChange:this.onSearchChange}),r.a.createElement(d,{robots:a}))}}]),a}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(15);o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.c24c32df.chunk.js.map