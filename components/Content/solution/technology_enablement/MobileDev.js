import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { Card_styled } from '../style'
import Image from 'next/image'

export default function MobileDev () {
  return (
    <Row id="oracle" className="my-5">
            <Row>
              <Col>
                <h4 className="bold text-center py-5" style={{ color: 'black' }}>Mobile Development Solutions</h4>
              </Col>
            </Row>
            <Col xs="12" md="4" lg="6">
              <Card_styled>
                <Card.Body>
                  <p className="p-lead">Android</p>
                  <p className="p-regular">Magna labore irure exercitation in eu ex proident. Voluptate amet labore ex duis dolore amet pariatur. Adipisicing ipsum elit aute ad irure pariatur eu labore esse. Et enim exercitation occaecat pariatur occaecat in exercitation sit irure qui amet.</p>
                </Card.Body>
              </Card_styled>
            </Col>
            <Col xs="12" md="4" lg="6">
              <Card_styled>
                <Card.Body>
                  <p className="p-lead">IOS</p>
                  <p className="p-regular">Ipsum in irure culpa laboris eu sunt esse commodo commodo anim. Aute laboris quis in commodo consectetur deserunt aliqua cillum adipisicing minim id reprehenderit. Exercitation fugiat nostrud pariatur sit deserunt amet ex Lorem. Ex velit in voluptate laboris aute sunt veniam occaecat Lorem labore officia sit excepteur. Laborum pariatur qui ad proident.</p>
                </Card.Body>
              </Card_styled>
            </Col>
            
          </Row>
  )
}