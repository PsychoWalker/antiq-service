import styled from "styled-components";
import {Card} from "antd";

export const MainStyle = styled.main`
    height: calc(100vh - 124px);
    display: flex;
    width: 50%;
    min-width: 1000px;
    padding-top: 100px;
    margin: 0 auto;
    flex-direction: column
`

export const MainCard = styled(Card)`
    width: 100%;
    
    & .ant-card-body {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
    & .ant-card-body::after,
    & .ant-card-body::before {
        content: none;
    }
    
    & .graph {
        flex-basis: 100%;
    }
    
    & .graph svg {
        width: 100%;
        margin-top: 20px;
        height: 30px;
    }
    
    & .graph svg rect {
        cursor: pointer;
    }
    
    & .graph svg rect:nth-child(4) {
        fill: orange
    }
    
    & .graph svg rect:hover {
        opacity: .7
    }
`
