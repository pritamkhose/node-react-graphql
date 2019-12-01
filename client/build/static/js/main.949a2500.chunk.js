(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(e,t,a){},45:function(e,t,a){e.exports=a(59)},51:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(37),o=a.n(l),i=a(44),c=a(5),u=a(13),s=a(23),m=(a(50),a(51),a(18)),d=a(19),p=a(21),b=a(20),h=a(22),E=a(15),f=(a(33),a(12)),v=a.n(f),y=a(60);function N(){var e=Object(E.a)(["\n  {\n    books {\n      _id\n      title\n      author\n    }\n  }\n"]);return N=function(){return e},e}var g=v()(N()),k=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(y.b,{query:g},(function(e){var t=e.loading,a=e.error,n=e.data;return t?"Loading...":a?"Error! ".concat(a.message):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",{className:"panel-title"},"LIST OF BOOKS"),r.a.createElement("h4",null,r.a.createElement(u.b,{to:"/create"},"Add Book"))),r.a.createElement("div",{className:"panel-body"},r.a.createElement("table",{className:"table table-stripe"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Author"))),r.a.createElement("tbody",null,n.books.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement(u.b,{to:"/show/".concat(e._id)},e.title)),r.a.createElement("td",null,e.author))})))))))}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(){var e=Object(E.a)(["\n    mutation updateBook(\n        $id: String!,\n        $isbn: String!,\n        $title: String!,\n        $author: String!,\n        $description: String!,\n        $publisher: String!,\n        $published_year: Int!) {\n        updateBook(\n        id: $id,\n        isbn: $isbn,\n        title: $title,\n        author: $author,\n        description: $description,\n        publisher: $publisher,\n        published_year: $published_year) {\n            updated_date\n        }\n    }\n"]);return O=function(){return e},e}function $(){var e=Object(E.a)(["\n    query book($bookId: String) {\n        book(id: $bookId) {\n            _id\n            isbn\n            title\n            author\n            description\n            published_year\n            publisher\n            updated_date\n        }\n    }\n"]);return $=function(){return e},e}var _=v()($()),j=v()(O()),S=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e,t,a,n,l,o,i=this;return r.a.createElement(y.b,{query:_,variables:{bookId:this.props.match.params.id}},(function(c){var s=c.loading,m=c.error,d=c.data;return s?"Loading...":m?"Error! ".concat(m.message):r.a.createElement(y.a,{mutation:j,key:d.book._id,onCompleted:function(){return i.props.history.push("/")}},(function(i,c){var s=c.loading,m=c.error;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",{className:"panel-title"},"EDIT BOOK")),r.a.createElement("div",{className:"panel-body"},r.a.createElement("h4",null,r.a.createElement(u.b,{to:"/",className:"btn btn-primary"},"Book List")),r.a.createElement("form",{onSubmit:function(r){r.preventDefault(),i({variables:{id:d.book._id,isbn:e.value,title:t.value,author:a.value,description:n.value,publisher:o.value,published_year:parseInt(l.value)}}),e.value="",t.value="",a.value="",n.value="",o.value=null,l.value=""}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"isbn"},"ISBN:"),r.a.createElement("input",{type:"text",className:"form-control",name:"isbn",ref:function(t){e=t},placeholder:"ISBN",defaultValue:d.book.isbn})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title:"),r.a.createElement("input",{type:"text",className:"form-control",name:"title",ref:function(e){t=e},placeholder:"Title",defaultValue:d.book.title})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"author"},"Author:"),r.a.createElement("input",{type:"text",className:"form-control",name:"author",ref:function(e){a=e},placeholder:"Author",defaultValue:d.book.author})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"description"},"Description:"),r.a.createElement("textarea",{className:"form-control",name:"description",ref:function(e){n=e},placeholder:"Description",cols:"80",rows:"3",defaultValue:d.book.description})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"author"},"Publisher:"),r.a.createElement("input",{type:"text",className:"form-control",name:"publisher",ref:function(e){o=e},placeholder:"Publisher",defaultValue:d.book.publisher})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"author"},"Published Year:"),r.a.createElement("input",{type:"number",className:"form-control",name:"published_year",ref:function(e){l=e},placeholder:"Published Year",defaultValue:d.book.published_year})),r.a.createElement("button",{type:"submit",className:"btn btn-success"},"Submit")),s&&r.a.createElement("p",null,"Loading..."),m&&r.a.createElement("p",null,"Error :( Please try again"))))}))}))}}]),t}(n.Component);function B(){var e=Object(E.a)(["\n    mutation AddBook(\n        $isbn: String!,\n        $title: String!,\n        $author: String!,\n        $description: String!,\n        $publisher: String!,\n        $published_year: Int!) {\n        addBook(\n            isbn: $isbn,\n            title: $title,\n            author: $author,\n            description: $description,\n            publisher: $publisher,\n            published_year: $published_year) {\n            _id\n        }\n    }\n"]);return B=function(){return e},e}var I=v()(B()),w=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e,t,a,n,l,o,i=this;return r.a.createElement(y.a,{mutation:I,onCompleted:function(){return i.props.history.push("/")}},(function(i,c){var s=c.loading,m=c.error;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",{className:"panel-title"},"ADD BOOK")),r.a.createElement("div",{className:"panel-body"},r.a.createElement("h4",null,r.a.createElement(u.b,{to:"/",className:"btn btn-primary"},"Book List")),r.a.createElement("form",{onSubmit:function(r){r.preventDefault(),i({variables:{isbn:e.value,title:t.value,author:a.value,description:n.value,publisher:o.value,published_year:parseInt(l.value)}}),e.value="",t.value="",a.value="",n.value="",o.value=null,l.value=""}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"isbn"},"ISBN:"),r.a.createElement("input",{type:"text",className:"form-control",name:"isbn",ref:function(t){e=t},placeholder:"ISBN"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title:"),r.a.createElement("input",{type:"text",className:"form-control",name:"title",ref:function(e){t=e},placeholder:"Title"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"author"},"Author:"),r.a.createElement("input",{type:"text",className:"form-control",name:"author",ref:function(e){a=e},placeholder:"Author"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"description"},"Description:"),r.a.createElement("textarea",{className:"form-control",name:"description",ref:function(e){n=e},placeholder:"Description",cols:"80",rows:"3"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"author"},"Publisher:"),r.a.createElement("input",{type:"text",className:"form-control",name:"publisher",ref:function(e){o=e},placeholder:"Publisher"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"author"},"Published Year:"),r.a.createElement("input",{type:"number",className:"form-control",name:"published_year",ref:function(e){l=e},placeholder:"Published Year"})),r.a.createElement("button",{type:"submit",className:"btn btn-success"},"Submit")),s&&r.a.createElement("p",null,"Loading..."),m&&r.a.createElement("p",null,"Error :( Please try again"))))}))}}]),t}(n.Component);function F(){var e=Object(E.a)(["\n  mutation removeBook($id: String!) {\n    removeBook(id:$id) {\n      _id\n    }\n  }\n"]);return F=function(){return e},e}function P(){var e=Object(E.a)(["\n    query book($bookId: String) {\n        book(id: $bookId) {\n            _id\n            isbn\n            title\n            author\n            description\n            published_year\n            publisher\n            updated_date\n        }\n    }\n"]);return P=function(){return e},e}var x=v()(P()),D=v()(F()),L=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(y.b,{pollInterval:500,query:x,variables:{bookId:this.props.match.params.id}},(function(t){var a=t.loading,n=t.error,l=t.data;return a?"Loading...":n?"Error! ".concat(n.message):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h4",null,r.a.createElement(u.b,{to:"/"},"Book List")),r.a.createElement("h3",{className:"panel-title"},l.book.title)),r.a.createElement("div",{className:"panel-body"},r.a.createElement("dl",null,r.a.createElement("dt",null,"ISBN:"),r.a.createElement("dd",null,l.book.isbn),r.a.createElement("dt",null,"Author:"),r.a.createElement("dd",null,l.book.author),r.a.createElement("dt",null,"Description:"),r.a.createElement("dd",null,l.book.description),r.a.createElement("dt",null,"Published Year:"),r.a.createElement("dd",null,l.book.published_year),r.a.createElement("dt",null,"Publisher:"),r.a.createElement("dd",null,l.book.publisher),r.a.createElement("dt",null,"Updated:"),r.a.createElement("dd",null,l.book.updated_date)),r.a.createElement(y.a,{mutation:D,key:l.book._id,onCompleted:function(){return e.props.history.push("/")}},(function(e,t){var a=t.loading,n=t.error;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e({variables:{id:l.book._id}})}},r.a.createElement(u.b,{to:"/edit/".concat(l.book._id),className:"btn btn-success"},"Edit"),"\xa0",r.a.createElement("button",{type:"submit",className:"btn btn-danger"},"Delete")),a&&r.a.createElement("p",null,"Loading..."),n&&r.a.createElement("p",null,"Error :( Please try again"))})))))}))}}]),t}(n.Component),A=new i.a({uri:"http://localhost:8080/graphql"});o.a.render(r.a.createElement(c.a,{client:A},r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(s.a,{exact:!0,path:"/",component:k}),r.a.createElement(s.a,{path:"/edit/:id",component:S}),r.a.createElement(s.a,{path:"/create",component:w}),r.a.createElement(s.a,{path:"/show/:id",component:L})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.949a2500.chunk.js.map