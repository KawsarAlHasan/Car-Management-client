import React from 'react';

const Blogs = (props) => {
    return (
        <div className='text-center'>
            <h1>Answer to the question No - 1</h1>
            <p><b>Javascript :</b>Javascript is a programming language that is used for writing scripts on the website. <br /> Javascript can only be run in the browsers. It is basically used on the client-side. <br /> Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. <br />

            <b>NodeJS :</b>NodeJS is a Javascript runtime environment. We can run Javascript outside the browser with the <br /> help of NodeJS. It is mostly used on the server-side. V8 is the Javascript engine inside of <br /> node.js that parses and runs Javascript. </p>

            <h1>Answer to the question No - 2</h1>
            <p><b>Node. js:</b> Node. js is primarily used for non-blocking, event-driven servers, due to its <br /> single-threaded nature. It's used for traditional web sites and back-end API services, but <br /> was designed with real-time, push-based architectures in mind.<br />
            <b>MongoDB:</b>MongoDB are a good choice when your data is document-centric and doesn’t fit <br /> well into the schema of a relational database, when you need to accommodate massive scale,<br /> when you are rapidly prototyping, and a few other use cases.</p>

            <h1>Answer to the question No - 3</h1>
            <p><b>SQL:</b> RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). These databases have fixed or static or <br /> predefined schema. These databases are not suited for hierarchical data storage. <br /> These databases are best suited for complex queries. Vertically Scalable and Follows ACID property. <br />
            <b>NoSQL:</b> Non-relational or distributed database system.  They have dynamic schema. These databases <br /> are best suited for hierarchical data storage. These databases are not so good for complex <br />queries. Horizontally scalable and Follows CAP(consistency, availability, partition tolerance) </p>

            <h1>Answer to the question No - 4</h1>
            <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained <br /> way for securely transmitting information between parties as a JSON object. This information<br /> can be verified and trusted because it is digitally signed. JWTs can be signed using a secret <br /> (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.</p>
        </div>
    );
};

export default Blogs;