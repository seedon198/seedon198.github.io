import os
import git
import time


def get_changes(repo):
    # Get the diff object
    diff = repo.index.diff(None)

    # Separate changes into added, modified, and deleted files
    added_files = [item.b_path for item in diff.iter_change_type('A')]
    modified_files = [item.b_path for item in diff.iter_change_type('M')]
    deleted_files = [item.b_path for item in diff.iter_change_type('D')]

    return added_files, modified_files, deleted_files


def git_commit_and_push():
    timestamp = time.strftime('%Y-%m-%d %H:%M:%S')
    print(f'Automatic checkin at {timestamp}')
    # Change to the current directory
    repo_path = '.'  # Replace with the actual path to your Git repository
    repo = git.Repo(repo_path)
    # Check if there are any changes
    if repo.is_dirty():
        print("Changes detected")
        # Get the changes
        added_files, modified_files, deleted_files = get_changes(repo)
        # Add all changes to the staging area
        repo.index.add('*')
        # Generate the commit message with changes
        commit_message = "Automatic commit at {}\n\n".format(time.strftime('%Y-%m-%d %H:%M:%S'))
        if added_files:
            commit_message += "Added files:\n{}\n\n".format('\n'.join(added_files))
        if modified_files:
            commit_message += "Modified files:\n{}\n\n".format('\n'.join(modified_files))
        if deleted_files:
            commit_message += "Deleted files:\n{}\n\n".format('\n'.join(deleted_files))
        # Commit the changes
        repo.index.commit(commit_message)
        print(commit_message)
        # Push the changes to the remote repository
        origin = repo.remote(name='origin')
        origin.push()


if __name__ == "__main__":
    while True:
        git_commit_and_push()
        time.sleep(60)  # Wait for 1 minute before checking again
