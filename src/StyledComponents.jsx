import styled from 'styled-components';

export const Row = styled.div`
    width: 100%;
    text-align: center;
`;

export const Block = styled.div`
    width: 500px;
    display: inline-block;
`;

export const Input = styled.input`
    border: none;
    padding: 0;
    background: repeating-linear-gradient(90deg, dimgrey 0, dimgrey 1ch, transparent 0, transparent 1.5ch) 0 100%/ 30ch 2px no-repeat;
    font: 10ch droid sans mono, consolas, monospace;
    letter-spacing: 0.5ch;
    &:focus {
        outline: none;
        color: dodgerblue;
    }
`;

export const Center = styled.div`
    margin: auto;
    padding: 10px;
`;

export const Left = styled.div`
    float: left;
`;

export const Box = styled.div`
    margin: 20px;
    background-color: #F1F3F4;
    border-radius: 10px;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
`;

export const Stats = styled.div`
    font-size: 40px;
    padding-bottom: 20px;
`;
