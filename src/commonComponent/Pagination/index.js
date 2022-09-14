import React from 'react';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import IconButton from "@material-ui/core/IconButton";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
});

const slickImgStyle = {
    color: '#fff !important',
    backgroundColor: '#AE965A !important',
    p: 1,
    width: '50px',
    height: '38px',
    borderRadius: 10
};

const Pagination = () => {
    const { items } = usePagination({
        count: 6,
    });
    //  onChange={(e, pageNum) => setPage(pageNum)} page={page} count={10}
    return (
        <nav>
            <List dir="rtl" className='d-flex align-items-center'>
                {items.map(({ page, type, selected, ...item }, index) => {
                    let children = null;
                    console.log('page--->',page,'selected',selected,"type",type,"item",item)
                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        children = '…';
                    } else if (type === 'page') {
                        children = (
                            <IconButton
                                style={{
                                    borderRadius: 0,
                                    borderTopRightRadius: 17,
                                    fontWeight: selected ? "bold" : undefined,
                                    backgroundColor: selected ? "#39281F" : "#F5F1EE",
                                    width: 40,
                                    color: "#CAC7C7",
                                    height: 40
                                }}
                                {...item}
                            >
                                {page}
                            </IconButton>
                        );
                    } else {
                        children = (
                            <IconButton {...item}>
                                {type === "previous" ? <EastIcon sx={{ ...slickImgStyle }} /> : <WestIcon sx={{ ...slickImgStyle }} />}
                            </IconButton>
                        );
                    }

                    return <li key={index}>{children}</li>;
                })}
            </List>
        </nav>
    )
};
export default Pagination;