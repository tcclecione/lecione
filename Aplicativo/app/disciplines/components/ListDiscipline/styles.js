export default {
  card: {
    flexDirection: 'row',
    minHeight: 200,
    margin: 2
  },
  contentTitle: {
    justifyContent: 'center',
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    width: 80
  },
  title: {
    transform: [{ rotate: '-90deg' }],
    color: '#FFF',
    fontWeight: '700',
    width: '100%',
    lineHeight: 24
  },
  contentDescription: {
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    flex: 1,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3
  },
  cardEmployee: {
    flexDirection: 'row',
    padding: 10,
    borderTopColor: '#4d4d4d',
    borderTopWidth: 1
  },
  contentEmployee: {
    alignSelf: 'center',
    marginLeft: 10
  },
  textListEmpty: {
    textAlign: 'center',
    color: '#FFF',
    alignItems: 'center',
    alignSelf: 'center'
  },
  flatList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
};
