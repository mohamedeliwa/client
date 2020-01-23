import React from 'react'
import { Container, Pagination } from 'react-bootstrap'
export default function BlogPagination() {
    return (
        <Container>
        <Pagination className=" justify-content-center mb-4">
            <Pagination.Item className="page-item">
                <a class="page-link" href="#">&larr; Older</a>
            </Pagination.Item>
            <Pagination.Item className="page-item disabled">
                <a class="page-link" href="#">Newer &rarr;</a>
            </Pagination.Item>
        </Pagination>
    </Container>

    )
}
