import styles from 'styled-components'

export const Wrapper = styles.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styles.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styles.h1`
  font-size: 2.5rem;
`

export const Description = styles.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styles.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`
