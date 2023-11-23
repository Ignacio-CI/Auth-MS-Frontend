'use client'

import { Button } from '@/components/ui/button'
import updateUser from '@/lib/server-actions/update-user'
import { useState } from 'react'

export default function UpdateUserButton() {
    const [updated, setUpdated] = useState('');

    async function checkIsUpdated() {
        const checkIfUpdate = await updateUser();
        setUpdated(checkIfUpdate);
    }

    return (
        <div className='ml-4 pt-2'>
            <p className={updated === 'Unauthorized' ? 'text-red-500' : 'text-emerald-600'}>{ updated }</p>
            <Button onClick={ async () => checkIsUpdated() }> Update User </Button>
        </div>
    )
}