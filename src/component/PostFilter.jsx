import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

export default function PostFilter({filter, setFilter}) {
  return (
    <div>
        <MyInput
          value={filter.query}
          onChange={e=>setFilter({...filter, query: e.target.value})}
          placeholder="Search"
        />
        <MySelect
          value={filter.select}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue="Sort"
          options={[
            {value: 'title', name: 'name'},
            {value: 'body', name: 'discription'}
          ]}
        />
      </div>
  )
}
