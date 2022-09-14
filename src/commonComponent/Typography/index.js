import React, {useMemo} from 'react';
import {styled, Typography as MuiTypography} from '@mui/material';

const StyledTypography = styled(MuiTypography)(({theme}) => ({
    fontFamily: [theme.font.family.PRIMARY].join(','),
}));

const Typography = ({
                        text,
                        style,
                        tag = 'body1',
                        gutterBottom = false,
                        dangerouslySetInnerHTML,
                        ...restProps
                    }) => {
    const typoStyle = useMemo(() => ({...style}), [style]);

    return (
        <StyledTypography dangerouslySetInnerHTML={dangerouslySetInnerHTML} {...restProps} variant={tag} style={typoStyle} gutterBottom={gutterBottom}>
            {text}
        </StyledTypography>
    );
};

export default Typography;
