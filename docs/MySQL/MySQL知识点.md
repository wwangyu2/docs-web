如果你忘记了 MySQL 的用户名，这里有几种方法可以尝试找回或确定你的 MySQL 用户名：

### 1. 使用默认用户
MySQL 默认的管理员用户名通常是 `root`。你可以尝试使用 `root` 用户名来登录：

```bash
mysql -u root -p
```
输入此命令后，系统会提示你输入密码。如果你记得 `root` 用户的密码，就可以输入它来尝试登录。

### 2. 列出所有用户：

```sql
SELECT User FROM mysql.user;
```
这将显示所有 MySQL 用户的列表。

### 3. 重置密码
如果你是系统的管理员，但完全忘记了用户名和密码，你可能需要重置 root 密码。这通常涉及停止 MySQL 服务，启动它的安全模式，然后使用特殊命令来设置新密码。但请注意，这个过程会使你能够重置 `root` 用户的密码，而不是找回忘记的用户名。不过，一旦你以 root 用户身份登录，你就可以查看或更改其他用户的账户信息。  

- #### 3.1   
  ```cmd
  sc query type= service state= all | findstr /i mysql
  ```
  这条命令会列出所有包含“mysql”的服务，无论它们是正在运行还是停止状态。  

  ```cmd
  net start MySQL服务名称  
  net stop MySQL服务名称  
  ```  
  启动或停止MySQL服务



