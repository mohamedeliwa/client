import React from 'react'
import { Media, Container } from 'react-bootstrap'
export default function Comments() {
    return (
        <Container>
            <Media className="mb-4">
                <img
                    className="d-flex mr-3 rounded-circle"
                    width={64}
                    height={64}
                    src="http://placehold.it/50x50"
                    alt="Generic placeholder" />
                <Media.Body >
                    <h5 class="mt-0">Commenter Name</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media.Body>
            </Media>

            <Media className="mb-4">
                <img className="d-flex mr-3 rounded-circle"
                    width={64}
                    height={64}
                    className="mr-3"
                    src="http://placehold.it/50x50"
                    alt="Generic placeholder" />
                <Media.Body class="media-body">
                    <h5 class="mt-0">Commenter Name</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

                    <Media className="media mt-4">
                        <img className="d-flex mr-3 rounded-circle"
                            width={64}
                            height={64}
                            className="mr-3"
                            src="http://placehold.it/50x50"
                            alt="Generic placeholder" />
                        <Media.Body >
                            <h5 class="mt-0">Commenter Name</h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                         </Media.Body>
                    </Media>

                    <Media className="mt-4">
                        <img class="d-flex mr-3 rounded-circle"
                            width={64}
                            height={64}
                            className="mr-3"
                            src="http://placehold.it/50x50"
                            alt="Generic placeholder" />
                        <Media.Body >
                            <h5 class="mt-0">Commenter Name</h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                         </Media.Body>
                    </Media>

                </Media.Body>
            </Media>
        </Container>
    )
}
