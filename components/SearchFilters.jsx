import { useState, useEffect } from 'react';
import { Flex, Box, Spinner, Select, Text, Input, Icon, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';
import { filterData, getFilterValues } from '../utils/filterData';


const SearchFilters = () => {
    const [filters, setFilters] = useState({filterData});

    const searchProperties = (filterValues) => {
        const path = router.pathname;
        const { query } = router;
        const values = getFilterValues(filterValues);

        values.forEach((item) => {
            if(item.value && filterValues?.[item.name]) {
            query[item.name] = item.value
        }
        })
        
        router.push({ pathname: path, query  })
    }

    return(
        <Flex bg="gray.100" justifyContent="center" p="4" flexWrap="wrap" >
            {filters.map((filter) => (
                <Box key={filter.queryName}>
                    <Select
                    placeholder={filter.queryName}
                    w="fit-content"
                    onchange={(e) => searchProperties({ [filter.queryName]: e.target.value })}
                    >
                    {filter?.item?.map((item) => (
                        <option value={item.value} key={item.value}>
                        {item.name}
                        </option>
                    ))}

                    </Select>
                </Box>
            ))}
        </Flex>
    )
}


export default SearchFilters;