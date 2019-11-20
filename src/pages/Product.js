import React, {Component} from 'react'
import {
    Container,
    Row,
    Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';
 class Product extends Component {
    constructor(props) {
        super(props);
    this.state ={
        products: [
            {
              "id": "52a93829-2491-4663-a98c-49a2695da420",
              "name": "Water - Perrier",
              "description": "praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla",
              "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            },
            {
              "id": "eb2c37d6-7678-459a-97ce-807cdbca5632",
              "name": "Trueblue - Blueberry Cranberry",
              "description": "pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit",
              "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            },
            {
              "id": "3b972079-c548-4a26-8032-d37c4792f090",
              "name": "Pork - Kidney",
              "description": "porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus",
              "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
            },
            {
              "id": "551b77c5-fe16-4f2f-89d1-4a6db8de4314",
              "name": "Mountain Dew",
              "description": "pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta",
              "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            },
            {
              "id": "b2ba11ff-9f8f-4275-a2f0-9efb3e11141b",
              "name": "Remy Red",
              "description": "nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit",
              "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            },
            {
              "id": "f5073133-4dd3-4e60-96e8-290990b4cf0d",
              "name": "Puree - Mango",
              "description": "id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus",
              "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
            },
            {
              "id": "edf254bb-bd87-4d83-a1d3-88df307a63fa",
              "name": "Butter - Unsalted",
              "description": "mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero",
              "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
            },
            {
              "id": "61aa2166-bc5e-4342-aa19-30a392553fde",
              "name": "Bandage - Finger Cots",
              "description": "a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed",
              "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            },
            {
              "id": "a2578e9c-9665-4c76-9911-4c9274356bcd",
              "name": "Sponge Cake Mix - Vanilla",
              "description": "donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat",
              "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
            },
            {
              "id": "3a42a773-f829-4b76-9f74-0ecb587a3166",
              "name": "Ham - Virginia",
              "description": "interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus",
              "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
            },
            {
              "id": "d4af47b5-b695-4f18-a63d-73b653cf5a6b",
              "name": "Port - 74 Brights",
              "description": "nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse",
              "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
            },
            {
              "id": "6a1e28be-4286-4690-8a43-08e20745ffe3",
              "name": "Bread - Pullman, Sliced",
              "description": "in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas",
              "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
            },
            {
              "id": "ae15672b-c22a-47d6-8169-fb6c55e2577a",
              "name": "Duck - Legs",
              "description": "quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt",
              "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
            },
            {
              "id": "b405faec-c313-4964-bc47-a7827e92209e",
              "name": "Coffee - Flavoured",
              "description": "dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam",
              "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            },
            {
              "id": "cf7713a8-ce34-4e5c-8215-a1c4a8e4b7de",
              "name": "Nantucket Orange Juice",
              "description": "quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a",
              "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            },
            {
              "id": "c435016f-550c-4791-b3d1-dfe17b16d0ba",
              "name": "Bread - Sticks, Thin, Plain",
              "description": "eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante",
              "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            },
            {
              "id": "beda43f5-14e9-4fe5-b885-f0fcb4577e83",
              "name": "Squid - Breaded",
              "description": "non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non",
              "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            },
            {
              "id": "14a5364b-4dcf-45ff-83be-105def001d73",
              "name": "Cheese - Marble",
              "description": "turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis",
              "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            },
            {
              "id": "9955e1a5-f4d5-4475-a9a3-68ed61b4258b",
              "name": "Lotus Rootlets - Canned",
              "description": "aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo",
              "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
            },
            {
              "id": "db32cf16-5033-4306-8cbe-199c96840ea7",
              "name": "Steampan - Foil",
              "description": "in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis",
              "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
            }
          ]
    }
    }
    render(){
        const {products} = this.state; 
        return (
        <Container>
            <h2>Product List!</h2>
            <Row>
            {products.map(pro => (
            <Col sm="4">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={pro.imageUrl}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>{pro.name}</CardTitle>
                  <CardText>{pro.description}</CardText>
                  <Button>Add to Cart</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
            </Row>
      </Container>
        );
    }

} 
export default Product;