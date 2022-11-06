import React from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import styles from './Post.module.scss';

const Post = ({
    _id,
    title,
    createdAt,
    imageUrl,
    user,
    isEditable,
}) => {

  const onClickRemove = () => {}

  return (
    <div >
      {isEditable && (
        <div className={styles.editButtons}>
          <a href="">
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
          </a>
          <IconButton onClick={onClickRemove} color="secondary">
            <DeleteIcon />
          </IconButton>
        </div>
      )}
      {imageUrl && (
        <img
          className={styles.image}
          src={imageUrl}
          alt={title}
        />
      )}
      <div className={styles.wrapper}>
        {/* <UserInfo {...user} additionalText={createdAt} /> */}
        <div className={styles.indention}>
          <h2 className={styles.title}>
            {/* {isFullPost ? title : <a href="">{title}</a>} */}
          </h2>
          {/* {children && <div className={styles.content}>{children}</div>} */}
        </div>
      </div>
    </div>
  )
}

export default Post