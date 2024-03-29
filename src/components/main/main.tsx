import React, {useEffect, useRef} from 'react';
import {MainStyle} from "./style";
import { Space } from 'antd';
import {MainCard} from "./style";
import {select, selectAll} from "d3-selection";

interface MainProps {
    sendTheme: string;
}

export const Main = (sendTheme:MainProps) => {
    const svgRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        selectAll('rect')
            .attr('width', '2%')
            .attr('height', '30')
            .attr('fill', 'gray')
            .attr('x', (_,i)=>i*2+'%')
    });
    return (
        <MainStyle>
            <h1>Welcome aboard</h1>

            <Space direction="vertical" size="middle" style={{ display: 'flex' }} >
                <MainCard size="small" style={{ background: 'rgb(var(--background-blocks))', color: 'rgb(var(--accent-blocks))' }} data-theme={sendTheme.sendTheme} >
                    <div>Public status pages</div><div>98.24%</div>
                    <div className="graph">
                        <svg ref={svgRef}>
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                        </svg>
                    </div>
                </MainCard>
                <MainCard size="small" style={{ background: 'rgb(var(--background-blocks))', color: 'rgb(var(--accent-blocks))' }} data-theme={sendTheme.sendTheme}>
                    <div>Private status pages</div><div>95.24%</div>
                </MainCard>
                <MainCard size="small" style={{ background: 'rgb(var(--background-blocks))', color: 'rgb(var(--accent-blocks))' }} data-theme={sendTheme.sendTheme}>
                    <div>Dashboard</div><div>100%</div>
                </MainCard>
            </Space>
        </MainStyle>
    );
};
