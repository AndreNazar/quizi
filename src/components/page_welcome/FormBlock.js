export const FormBlock = ({content}) => {
    const {title, blocks} = content
    return <div className='form_block'>
      <p>{title}</p>
      <div className='form_block_content'>
        {blocks.map(b => b)}
      </div>
    </div>
}