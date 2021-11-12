import React, { useState } from 'react';
import { Image } from 'antd';
import 'antd/dist/antd.css'

const FilterIcon = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Image
      width={200}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.pn"
    />
  );
};

export default FilterIcon