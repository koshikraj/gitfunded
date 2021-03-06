import React from 'react';
import { Skeleton, InputNumber, Row, Col, Button, Statistic, Table, Divider, Progress, Icon, Popover, Card } from 'antd';
import Menubar from "./menubar";
import {UserContext} from "../Context";



class Profile extends React.Component {


    constructor(props) {
        super(props);


        this.state = {
            peers: [],
            cashBalance: '0 USD',
            me: '',
            popOverVisible: false,
            fundValue: 1000000,
            userInfospinning: false,
            userDetails: {},
        }
    }


    fundAccountForm() {
        return(

            <div>
                <p>
                    Enter an amount to fund
                </p>
                <InputNumber
                    defaultValue={1000000}
                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    onChange={(value)=>{this.setState({fundValue:value})}}
                />

            <div style={{float: "right"}}>
            <Button type="primary" onClick={() => {}}>
                    FUND
            </Button>
            </div>

            </div>

        )


    }


    handleVisibleChange = popOverVisible => {
        this.setState({ popOverVisible });
    };




    render() {

  return (
    <div>

      <h2>Profile</h2>
      <Row>
      <Col span={12}>

                  <Row>
                      <Col span={8}>
                          <div style={{margin: "1.25em 0em"}}>
            <span style={{
                fontSize: "1.25em",
                fontWeight: 500
            }}>Basic Details
            <Button
                type="link"
                icon="edit"
            >
              </Button>
            </span>
                          </div>
                      </Col>
                  </Row>
          {this.state.userInfospinning ?
              <div><Skeleton active/> <Skeleton active/></div>:
              <div>
                  <Row style={{margin: '20px 0px'}}>
                      <Col span={4}>
                          <div>
            <span style={{
                margin: "1em 0em",
                fontSize: "1.0em",
                fontWeight: 500
            }}><Icon type="user"/> Full Name </span>
                          </div>
                      </Col>
                      <Col span={8}>
                          <div>
            <span style={{
                margin: "1em 0em",
                fontSize: "1.0em",
                fontWeight: 400
            }}>{this.context.name}</span>
                          </div>
                      </Col>

                  </Row>
                  <Row style={{margin: '20px 0px'}}>
                      <Col span={4}>
                          <div>
            <span style={{
                margin: "1em 0em",
                fontSize: "1.0em",
                fontWeight: 500
            }}><Icon type="phone" theme="filled"/> Email </span>
                          </div>
                      </Col>
                      <Col span={8}>
                          <div>
            <span style={{
                margin: "1em 0em",
                fontSize: "1.0em",
                fontWeight: 400
            }}>{this.context.email} </span>
                          </div>
                      </Col>
                  </Row>
                  <Row style={{margin: '20px 0px'}}>
                      <Col span={4}>
                          <div>
            <span style={{
                margin: "1em 0em",
                fontSize: "1.0em",
                fontWeight: 500
            }}><Icon type="home" theme="filled"/> Location </span>
                          </div>
                      </Col>
                      <Col span={8}>
                          <div>
            <span style={{
                margin: "1em 0em",
                fontSize: "1.0em",
                fontWeight: 400
            }}> {this.context.location} </span>
                          </div>
                      </Col>
                  </Row>
                  <Row style={{margin: '20px 0px'}}>
                      <Col span={4}>
                          <div>
            <span style={{
                margin: "1em 0em",
                fontSize: "1.0em",
                fontWeight: 500
            }}><Icon type="fire" theme="filled"/> Profile Strength </span>
                          </div>
                      </Col>
                      <Col span={8}>
                          <Progress type="circle" percent={99} width={80}/>
                      </Col>
                  </Row>
              </div>
          }
      </Col>




          <Col span={12}>
              <Row>
                  <Col span={8}>
                      <div style={{ margin: "1.25em 0em" }}>
            <span style={{
                fontSize: "1.25em",
                fontWeight: 500
            }}>Account Details
            <Button
                type="link"
                icon="edit"
            >
              </Button>
            </span>
                      </div>
                  </Col>
              </Row>

          <div style={{ background: '#ECECEC', padding: '30px' }}>

          <Row style={{ margin: '20px 0px' }}>
          <Col span={12}>
                      <div>
            <span style={{
                margin: "1em 0em",
                fontSize: "1.0em",
                fontWeight: 500
            }}>User Name </span>
                      </div>
                  </Col>
                  <Col span={12}>
                      <div>
            <span style={{
                margin: "1em 0em",
                fontSize: "1.0em",
                fontWeight: 400
            }}>{this.context.login}</span>
                      </div>
                  </Col>

              </Row>

              <Row gutter={16}>
                  <Popover content={<div></div>} title="Peer Info">
                  <Col span={12}>
                      <Button type="link" >
                      <Statistic title="Active Peers" value={this.state.peers.length} prefix={<Icon type="team" />} />
                      </Button>
                  </Col>
                  </Popover>
                  <Col span={12}>
                      <Statistic title={"Account Balance (" + this.state.cashBalance.split(' ')[1]+ ")"} value={this.state.cashBalance.split(" ")[0]} precision={2} />
                          <Popover
                              content={this.fundAccountForm()}
                              title="Fund Account"
                              trigger="click"
                              visible={this.state.popOverVisible}
                              onVisibleChange={this.handleVisibleChange}
                          >

                      <Button style={{ marginTop: 16 }} type="primary">
                          Fund account
                      </Button>
                          </Popover>

                      <Button type="primary" onClick={() => {}} shape="circle" icon="reload" size={'small'} style={{ marginLeft: 15, marginTop: 16 }} />


                  </Col>
              </Row>
              </div>

              <div style={{ background: '#ECECEC', padding: '30px' }}>
              <Row gutter={16}>

                  <Col span={12}>
                      <Card>
                          <Statistic
                              title="Loans Accepted"
                              value={70.28}
                              precision={2}
                              valueStyle={{ color: '#3f8600' }}
                              prefix={<Icon type="arrow-up" />}
                              suffix="%"
                          />
                      </Card>
                  </Col>
                  <Col span={12}>
                      <Card>
                          <Statistic
                              title="Activity"
                              value={9.3}
                              precision={2}
                              valueStyle={{ color: '#cf1322' }}
                              prefix={<Icon type="arrow-down" />}
                              suffix="%"
                          />
                      </Card>
                  </Col>

              </Row>
              </div>


          </Col>
      </Row>

    </div>
  );
}
}


export default Profile;
Profile.contextType=UserContext;
