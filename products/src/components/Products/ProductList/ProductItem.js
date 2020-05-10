import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

const ProductItem = ({product}) => 
            <TableRow key={product.id}>
                <TableCell align="left">{product.id}</TableCell>
                <TableCell align="left">{product.title}</TableCell>
                <TableCell align="left">{product.type}</TableCell>
                <TableCell align="left">{product.description}</TableCell>
                <TableCell align="left">{product.price}</TableCell>
                <TableCell align="left">{product.rating}</TableCell>
            </TableRow>;

export default ProductItem;