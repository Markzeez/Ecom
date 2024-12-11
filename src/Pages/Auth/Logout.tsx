import useAuthStore from '../../Store/useAuthStore.tsx';


const Logout: React.FC= () => {
    const { logout, user} = useAuthStore();
    // const logout =  useAuthStore((state => state.logout));
  return (
    <div className='flex flex-col items-center justify-center p-4'>
        <p className='mb-2 text-xs'>Logged in as:{user?.firstName}</p>
            <button
            onClick={logout}
            className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
            >
                Logout
            </button>
    </div>
  )
}

export default Logout