import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BlogBarwidget from './BlogBarWidget'
import BlogPagination from './BlogPagination'
import BlogPostCard from './BlogPostCard'
export default function BlogHome() {

    return (
        <Container>
            <Row>
                <Col md={8}>
                    <h1 class="my-4">Page Heading
                    <small>Secondary Text</small>
                    </h1>
                    <BlogPostCard />
                    <BlogPostCard />
                    <BlogPostCard />
                    <BlogPagination />
                </Col>
                <Col md={4}>
                <BlogBarwidget />
                </Col>
            </Row>
        </Container>

    )
}
