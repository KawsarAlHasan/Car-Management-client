import React from 'react';
import { Accordion } from 'react-bootstrap';
import faqs from '../../images/faqs.jpg';

const Faqs = (props) => {
    return (
        <div id='/home#faqs' className='container'>
            <h1 className="text-center mb-4">Frequently <span className='text-danger'> Asked Questions</span></h1>
            <div className='row'>
                <div className='col-lg-6'>
                    <img src={faqs} className='img-fluid w-76 rounded' alt='' />
                </div>
                <div className='col-lg-6'>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Explain what are the key responsibilities of a Web Developer?</Accordion.Header>
                            <Accordion.Body>
                                Program test and debug all web applications
                                Design, develop, test and deploy web applications
                                Uploading sites onto server and registering it with different search engines
                                Coordinate with other designers and programmers to develop web projects
                                Fix bugs, troubleshoot and resolve problems
                                In case of system failure initiate periodic testing and implement contingency plans
                                Develop appropriate code structures to solve specific tasks
                                Support and assist in the upkeep and maintenance of websites
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Explain what is CORS? How does it work?</Accordion.Header>
                            <Accordion.Body>
                                (CORS) Cross-Origin Resource Sharing is a mechanism that enables many resources (e.g., JavaScript, fonts etc.) on a web page to be requested from another domain outside the domain from which the resource originated.  It is a mechanism supported in HTML5 that manages XMLHttpRequest access to a domain different.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Explain what is an ETag and how does it work?</Accordion.Header>
                            <Accordion.Body>
                                An ETag is an opaque identifier allocated by a web server to a specific version of a resource found at a URL.  The ETag is a part of HTTP, the protocol for the world wide web and when the server reads the ETag from client request, the server can then tell whether to send the file (HTTP 200) or tell the client just to use their local copy (HTTP 304).
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Explain what is long polling?</Accordion.Header>
                            <Accordion.Body>
                                Long polling is a web application development pattern used to emulate pushing data from the server to the client.  When the long polling is used, the client sends a request to the server, and the connection remains intact until the server is ready to send data to the client. The connection will be closed only after the data is sent back to the client or connection timeout occurs.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Faqs;