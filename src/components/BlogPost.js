import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BlogBarwidget from './BlogBarWidget'
import CommentsForm from './CommentsForm'
import Comments from './Comments'
import BlogPostContent from './BlogPostContent'
export default function BlogPost() {
    
    return (
        <Container>
            <Row>
                <Col md={8}>
                    <BlogPostContent/>
                    <CommentsForm/>
                    <Comments/>
                </Col>

                <Col md={4}>
                    <BlogBarwidget />
                </Col>
            </Row>
        </Container >
    )
}
