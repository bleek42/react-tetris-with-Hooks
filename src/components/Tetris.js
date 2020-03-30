import React from 'react';
import Stage from './Stage';
import Display from './Display';
import Start from './Start';
import { createStage } from '../gameHelpers';
import { StyledTetris, StyledTetrisWrapper} from './styles/StyledTetris';

const Tetris = () => {
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={createStage} />
                <aside>
                    <div>
                        <Display text="score" />
                        <Display text="rows" />
                        <Display text="level" />
                    </div>
                <Start />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};
    
    
export default Tetris;
