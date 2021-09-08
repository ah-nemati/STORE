import Link from 'next/link';
import React from 'react';

export const Href = (props) => {
    return (
    <Link href={props.href}>
    <a className={props.className}>
        {props.children}
    </a>
  </Link>
    )
}
