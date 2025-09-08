import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TextInput, 
  TouchableOpacity, 
  Keyboard 
} from 'react-native';

export default function Comments() {
  const [comments, setComments] = useState([
    { id: '1', author: 'Alice Gou', text: 'What a lovely dress, love it! 👏' },
    { id: '2', author: 'Gellan', text: 'Your deadly gorgeous bruh' },
    { id: '3', author: 'Charlie', text: '😍😍😍😍😍😍😍' },
  ]);

  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() === '') return;

    const newItem = {
      id: Date.now().toString(),
      author: 'Krishia Raro',
      text: newComment,
    };

    setComments([newItem, ...comments]);
    setNewComment('');
    Keyboard.dismiss(); // 👈 hide the keyboard after posting
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Comments</Text>

      {/* Input + Button */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write a comment..."
          value={newComment}
          onChangeText={setNewComment}
          returnKeyType="done"
          onSubmitEditing={handleAddComment} // also add when pressing enter
        />
        <TouchableOpacity style={styles.button} onPress={handleAddComment}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>

      {/* Comment List */}
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.commentCard}>
            <Text style={styles.author}>{item.author}</Text>
            <Text style={styles.comment}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  commentCard: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  author: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
    color: '#555',
  },
  comment: {
    fontSize: 14,
    color: '#444',
  },
});