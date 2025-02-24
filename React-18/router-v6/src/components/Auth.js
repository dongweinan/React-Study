import { useRef } from 'react'
import { useState } from 'react'

const Auth = (props) => {
  const usernameVal = useRef()
  const passwordVal = useRef()
  const emailVal = useRef()

  const [isLogin, setIsLogin] = useState(true)
  const submit = (e) => {
    e.preventDefault()
    const username = usernameVal.current.value
    const password = passwordVal.current.value
    if (isLogin) {
      console.log(username, password, '登录')
    } else {
      const email = usernameVal.current.value
      console.log(username, email, password, '注册')
    }
  }
  return (
    <div>
      <h1>{isLogin ? '登录' : '注册'}</h1>
      <form>
        <div>
          <input ref={usernameVal} type="text" placeholder="姓名" />
        </div>
        <div>
          {!isLogin ? (
            <input ref={emailVal} type="text" placeholder="邮箱" />
          ) : null}
        </div>
        <div>
          <input ref={passwordVal} type="password" placeholder="密码" />
        </div>
        <div>
          <button onClick={submit}>登录</button>
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault()
              setIsLogin((prevState) => !prevState)
            }}
          >
            {isLogin ? '没有账号？立即注册' : '已有账号，立即登录'}
          </a>
        </div>
      </form>
    </div>
  )
}
export default Auth
