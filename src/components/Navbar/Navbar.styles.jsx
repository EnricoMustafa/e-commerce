import styled from "styled-components"

export const ContainerNav = styled.div`
padding: 1%;
width: 100%;
box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
`;
export const BoxElements = styled.div`
display: flex;
width: 80%;
justify-content: space-between;
align-items: center;
margin: 0 auto;
`;
export const ContainerList = styled.ul`
display: flex;
width:22%;
`;
export const ListNav = styled.a`
cursor: pointer;
margin: 0 auto;
transition: transform 0.3s, box-shadow 0.3s;

&:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
}
`;

