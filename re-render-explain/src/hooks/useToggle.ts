import  { useState } from 'react'

export default function useToggle() {
    const [visible, setVisible] = useState(false);
  return {
    visible,
    show:()=>setVisible(true),
    hide:()=>setVisible(false)
  }
}
