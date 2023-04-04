const User = (props) => (
  <i>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-user'
      width={24}
      height={24}
      strokeWidth={2}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M8 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2' />
    </svg>
  </i>
)

export default User
